import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button, ButtonGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import Header from '../../components/Header'
import { MainContainer, WorkSpace, View, Zoomer, ChatViewer } from '../../components/Styled'
import { MainCard } from '../../components/CardElements'
import background from '../../assets/background.png'
import useGlobal from '../../store'
import ModalView from '../../components/ModalView'
import { drawCurve } from '../../utils'
import { getChatAPI, updateChatAPI } from '../../api'
import { CardProps, Chat } from '../../interfaces/card_interface';
import { X } from 'react-bootstrap-icons';

import MessageUser from '../Message'
Modal.setAppElement('#root')




const Home: React.FC<{}> = ({ }) => {
    const location = useLocation();
    const history = useHistory();
    const [globalState, globalActions] = useGlobal();
    const { cards } = globalState;


    const [loading, setLoading] = useState(true);
    const [isViewChat, setIsViewChat] = useState(false);
    const [chatId, setChatId] = useState(0);

    useEffect(() => {
        const { chat_id } = location.state as any
        console.log(chat_id); // result: 'some_value'
        setChatId(chat_id)
        getList(chat_id)
    }, [location]);



    const getList = async (chat_id: number) => {
        try {
            setLoading(true)
            const res = await getChatAPI(chat_id)
            globalActions.setCards(res.data.cards);
            if (res.data.cards.length === 0) {
                isCardNull(res.data)
            }
            else {
                globalActions.setChat(res.data)
            }
            setLoading(false)
        } catch (error) {
        }
    }

    const isCardNull = async (data: Chat) => {
        const chat = {
            ...data,
            cards: [
                {
                    id: 0,
                    step: 0,
                    messages: [
                        {
                            id: 0,
                            step: 0,
                            type_message: "text",
                            type_content: "question",
                            data: "",
                            url: null,
                            child_id: 0
                        }
                    ],
                    position: {
                        x: 100.0,
                        y: 100.0
                    }
                }
            ]
        }
        try {
            const res = await updateChatAPI(chat);
            globalActions.setChat(res.data)
        } catch (error) {
            console.log(error)
        }
    }



    const [zoom, setZoom] = useState<number>(1)

    const isEmptyCards = () => (
        <MainCard data={{
            id: 0,
            messages: [
                {
                    id: 0,
                    step: 0,
                    type_message: "text",
                    type_content: "question",
                    data: "",
                    url: null,
                    child_id: 0
                }
            ],
            position: { x: 10, y: 10 }
        }} key={0} />
    )


    const renderCards = () => {
        console.log("I give cards ", cards)
        return (
            <>
                {cards.length > 0 && cards.map((item, index) => (
                    <MainCard data={item} key={item.id} />
                ))}
            </>
        );
    }

    const renderSVG = (startX: number, startY: number, endX: number, endY: number) => {
        let d = drawCurve(startX, startY, endX, endY)
        return (<path d={d} stroke="rgb(37 53 74)" marker-end="url('#arrow')" stroke-width="3" fill="none" style={{ position: 'absolute' }} />)
    }

    const svgList = () => {
        let data: { startX: number, startY: number, endX: number, endY: number }[] = []
        globalState.cards.map((card) => {
            card.messages.map((message) => {
                if (message.type_message === 'button') {
                    message.contentButton.map((btn) => {

                        if (btn.to_id !== null && btn.offsetHeight !== null && btn.offsetTop !== null && btn.offsetWidth !== null) {
                            let btnIndex = globalState.cards.findIndex(x => x.id === btn.to_id)
                            if (btnIndex > -1) {
                                let itemSVG = {
                                    endX: globalState.cards[btnIndex].position.x - 45,
                                    endY: globalState.cards[btnIndex].position.y,
                                    startY: card.position.y + btn.offsetTop - btn.offsetHeight / 2,
                                    startX: card.position.x + btn.offsetWidth
                                }
                                data.push(itemSVG)
                            }

                        }
                    })
                }
            })
        })
        return data
    }

    return (
        <MainContainer >
            <Header
                title={'Редактирование чата'}
                onBack={() => history.goBack()}
                onRihgt={() => setIsViewChat(true)}
            />

            <WorkSpace style={{ background: 'rgb(230 238 246)', }}>
                <View style={{ transform: `scale(${zoom})`, padding: '40px', zIndex: 2 }}>
                    {!loading && globalState.cards.length > 0 ? renderCards() : globalState.cards.length === 0 ? isEmptyCards() : null}
                    <svg height="5000" width="5000" style={{ padding: '40px', }}>
                        <marker id="arrow" markerWidth="20" markerHeight="20" refX="16" refY="8" orient="auto" markerUnits="userSpaceOnUse" style={{ fill: 'rgb(37 53 74)' }}><polyline points="0,0 20,8 0,16 4,8"></polyline></marker>
                        {!loading && svgList().map((item) =>
                            renderSVG(item.startX, item.startY, item.endX, item.endY)
                        )}
                    </svg>
                </View>
                <Zoomer>
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={() => setZoom(zoom - 0.1)} style={{ backgroundColor: 'white', color: 'black' }} variant="secondary">-</Button>
                        <Button disabled={true} style={{ backgroundColor: 'white', color: 'black' }} variant="secondary">{(zoom * 100).toFixed(0)}%</Button>
                        <Button onClick={() => setZoom(zoom + 0.1)} style={{ backgroundColor: 'white', color: 'black' }} variant="secondary">+</Button>
                    </ButtonGroup>
                </Zoomer>
                <ChatViewer zIndex={isViewChat ? 15 : -15}>
                    <div style={{ cursor: 'pointer' }} onClick={() => setIsViewChat(false)} >
                        <X style={{ position: 'absolute', right: 10, }} size={24} />
                    </div>
                    <MessageUser isViewChat={isViewChat} chatId={chatId} />
                </ChatViewer>
            </WorkSpace>

            <Modal
                isOpen={globalState.modalState.visible}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => globalActions.onClickModal(false, null, null, null)}
                closeTimeoutMS={300}
                style={{
                    content: { right: '0.5%', left: '50%', top: '0.5%', bottom: '0.5%', },
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 999 }
                }}
                contentLabel="Example Modal"
            >
                <ModalView />
            </Modal>
        </MainContainer >
    );
}

export default Home;
