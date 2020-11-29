import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header'
import { MainContainer, WorkSpace, View, Zoomer } from '../../components/Styled'
import { MainCard } from '../../components/CardElements'
import background from '../../assets/background.png'
import useGlobal from '../../store'
import ModalView from '../../components/ModalView'
import { drawCurve } from '../../utils'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { getChatAPI } from '../../api'

Modal.setAppElement('#root')

const Home: React.FC<{}> = ({ }) => {
    const location = useLocation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const { chat_id } = location.state as any
        console.log(chat_id); // result: 'some_value'
        getList(chat_id)
    }, [location]);


    const getList = async (chat_id: number) => {
        try {
            setLoading(true)
            const res = await getChatAPI(chat_id)
            console.log(res)
            setList(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error.response)
        }
    }


    const [globalState, globalActions] = useGlobal();

    const [zoom, setZoom] = useState<number>(1)

    const isEmptyCards = () => <MainCard data={{ id: 0, message: [], position: { x: 10, y: 10 } }} />


    const renderCards = () => (
        <>
            {globalState.cards.length > 0 && globalState.cards.map((item, index) => (
                <MainCard data={item} key={index} />
            ))}
        </>
    );

    const renderSVG = (startX: number, startY: number, endX: number, endY: number) => {
        let d = drawCurve(startX, startY, endX, endY)
        return (<path d={d} stroke="rgb(37 53 74)" marker-end="url('#arrow')" stroke-width="3" fill="none" style={{ position: 'absolute' }} />)
    }

    const svgList = () => {
        let data: { startX: number, startY: number, endX: number, endY: number }[] = []
        globalState.cards.map((card) => {
            card.message.map((message) => {
                if (message.type_message === 'button') {
                    message.contentButton.map((btn) => {
                        if (btn.to_id !== null && btn.offsetHeight !== null && btn.offsetTop !== null && btn.offsetWidth !== null) {
                            let itemSVG = {
                                endX: globalState.cards[btn.to_id].position.x - 45,
                                endY: globalState.cards[btn.to_id].position.y,
                                startY: card.position.y + btn.offsetTop - btn.offsetHeight / 2,
                                startX: card.position.x + btn.offsetWidth
                            }
                            data.push(itemSVG)
                        }
                    })
                }
            })
        })
        return data
    }

    return (
        <MainContainer >
            <Header title={'Редактирование чата'} />
            <WorkSpace style={{ background: 'rgb(230 238 246)', }}>
                <View style={{ transform: `scale(${zoom})`, padding: '40px', zIndex: 2 }}>
                    {globalState.cards.length !== 0 ? renderCards() : isEmptyCards()}
                    <svg height="5000" width="5000" style={{ padding: '40px', }}>
                        <marker id="arrow" markerWidth="20" markerHeight="20" refX="16" refY="8" orient="auto" markerUnits="userSpaceOnUse" style={{ fill: 'rgb(37 53 74)' }}><polyline points="0,0 20,8 0,16 4,8"></polyline></marker>
                        {svgList().map((item) =>
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
