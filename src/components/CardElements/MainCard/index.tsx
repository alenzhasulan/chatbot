import React, { useState, useEffect, useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Modal from 'react-modal';
import { Button, CardProps, Text, Message, AllMessage } from '../../../interfaces/card_interface'
import useGlobal from '../../../store'

import { Card } from '../../Styled'
import { TextInput, ButtonList } from '../index'


export interface CardState {
    activeDrags: number,
    data: CardProps
}


Modal.setAppElement('#root')

const MainCard: React.FC<{ data: CardProps, }> = ({ data }) => {
    console.log(data)
    const [card, setCard] = useState<CardState>({ activeDrags: 0, data: data })
    const [globalState, globalActions] = useGlobal();
    const onStart = () => {
        let newActiveDrags: number = card.activeDrags
        setCard({ ...card, activeDrags: ++newActiveDrags, })
    };

    const onStop = () => {
        let newActiveDrags: number = card.activeDrags
        setCard({ ...card, activeDrags: --newActiveDrags, })
    };
    const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
        console.log(e, ui)
        if (card.data.position.x !== ui.lastX && card.data.position.y !== ui.lastY) {
            globalActions.movePostion({ x: ui.lastX, y: ui.lastY }, card.data.id)
        }
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };



    const renderMessages = () => (
        <>
            {card.data.messages.length > 0 && card.data.messages.map((item: AllMessage, index) => {
                switch (item.type_message) {
                    case 'text':
                        return (
                            <TextInput
                                key={index}
                                text={item}
                                card_id={card.data.id}
                                message_id={item.id}
                            />
                        )
                    case 'button':
                        return (
                            <ButtonList
                                key={index}
                                buttons={item}
                                card_id={card.data.id}
                                message_id={item.id} />
                        )
                    default:
                        break;
                }

            })}
        </>
    );




    return (
        // <div style={{ position: 'absolute' }}>
        <Draggable

            onDrag={handleDrag}
            handle="strong"
            defaultPosition={{ x: card.data.position.x, y: card.data.position.y }}

            {...dragHandlers}>
            <Card>
                <strong style={{ cursor: 'move', }}>
                    <div style={style.div}>👋{}</div>
                </strong>
                <div style={{ padding: '16px' }}>
                    {renderMessages()}
                </div>
            </Card>
        </Draggable>
        // </div>
    );
}

const style = {
    div: {
        padding: '10px',
        marginBottom: '-20px',
        background: 'white',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    }
}

export default MainCard;
