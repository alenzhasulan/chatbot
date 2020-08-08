import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header'
import styled from 'styled-components';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { ListGroup } from 'react-bootstrap'
import PropTypes from "prop-types";

export interface IUser {
    activeDrags: number,
}

const list = ['Текст', 'Картинка', 'Кнопка', 'Видео']

const Home: React.FC<{ initialZoom?: number, initialDropdown: boolean }> = ({ initialZoom = 1, initialDropdown = false }) => {
    const [activeDrags, setActiveDrags] = useState<IUser>({ activeDrags: 0, })
    const [zoom, setZoom] = useState(initialZoom)
    const [visibleDropdown, setVisibleDropdown] = useState(initialDropdown)

    const onStart = () => {
        let newActiveDrags: IUser = activeDrags
        setActiveDrags({ activeDrags: ++newActiveDrags.activeDrags, })
    };

    const onStop = () => {
        let newActiveDrags: IUser = activeDrags
        setActiveDrags({ activeDrags: --newActiveDrags.activeDrags, })
    };
    const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
        console.log(e, ui)
    };



    const dragHandlers = { onStart: onStart, onStop: onStop };

    return (
        <MainContainer >
            <Header />
            <WorkSpace>
                <View style={{ transform: `scale(${zoom})`, padding: '40px' }} >
                    <Draggable
                        onDrag={handleDrag}
                        handle="strong"
                        {...dragHandlers}>
                        <Card>
                            <strong style={{ cursor: 'move' }}><div>1 сценарий</div></strong>
                            <div style={{ marginTop: '20px' }}>
                                <TextArea name="textAreaInput" placeholder="Сообщение от бота" />

                                <AddBtn />



                            </div>

                        </Card>
                    </Draggable>
                </View>
                <Zoomer>
                    <p onClick={() => setZoom(zoom + 0.1)}>Увеличить</p>
                    <p>{(zoom * 100).toFixed(0)}%</p>
                    <p onClick={() => setZoom(zoom - 0.1)}>Уменшить</p>
                </Zoomer>
            </WorkSpace>
        </MainContainer >
    );
}





const MainContainer = styled.div`
             height: 100vh; 
             overflow: hidden;
             background: rgba(243, 245, 248, 1);
             display: flex;
             flex: 1;
             flex-direction: column;
        `;

const WorkSpace = styled.div`
            display: flex;
            flex: 1;
            overflow-x: scroll;
            overflow-y: scroll;
        `;

const View = styled.div`
            min-width:5000px !important;
            height:5000px;
          
            transform-origin: 0 0;
        `;

const Zoomer = styled.div`
            position:absolute;
            bottom:0;
            right:0
        `;


const Card = styled.div`
            margin-right: 56px;
            padding: 16px;
            background: #fff;
            box-shadow: 0 1px 4px rgba(21,22,28,.1);
            border-radius: 4px;
            width: 256px;
            box-sizing: border-box;
        `;
const TextArea = styled.textarea`
    border: 1px solid #f3f5f8;
    background: #f3f5f8;
    border-radius: 4px;
    outline: 0;
    width: 100%;
    font-size: 15px;
    line-height: 20px;
    color: #15161c;
    padding: 9px 11px;
    box-sizing: border-box;
    height:40px
`

function useOutsideAlerter(ref: any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            console.log(ref, event)
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }
        // Bind the event listener
        document.addEventListener("mousemove", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousemove", handleClickOutside);
        };
    }, [ref]);
}


const AddBtn = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div ref={wrapperRef} style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
            <AddBtnView>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.0005 20V13H20.0005V11H13.0005V4H11.0005V11H4.00049V13H11.0005V20H13.0005Z" fill="#15161C" />
                </svg>
            </AddBtnView>
            <div style={{ position: 'absolute', width: 150, right: 0, paddingTop: 50 }}>
                <ListGroup>
                    {list.map((item: string, index: number) =>
                        <ListGroup.Item variant="primary">{item}</ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    )
}

const AddBtnView = styled.div`
    display:flex;
    width: 40px;
    height: 40px;
    background: #fff;
    cursor: pointer;
    outline: none;
    align-self: center;
    border: 1px solid rgba(21,22,28,.16);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    
`



export default Home;
