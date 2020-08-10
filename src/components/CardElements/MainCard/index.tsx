import React, { useState, useEffect, useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { CardProps, Text } from '../../../interfaces/card_interface'


import { Card } from '../../Styled'
import { TextInput } from '../index'


export interface CardState {
    activeDrags: number,
    data: CardProps
}

const MainCard: React.FC<{ data: CardProps, }> = ({ data }) => {
    console.log(data)
    const [card, setCard] = useState<CardState>({ activeDrags: 0, data: data })

    const onStart = () => {
        let newActiveDrags: number = card.activeDrags
        setCard({ ...card, activeDrags: ++newActiveDrags, })
    };

    const onStop = () => {
        let newActiveDrags: number = card.activeDrags
        setCard({ ...card, activeDrags: --newActiveDrags, })
    };
    const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
        // console.log(e, ui)
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };

    const isEmptyMessage = () => {
        let initial: Text = {
            id: 0,
            step: 0,
            data: '',
            type_message: 'text',
            type_content: 'question'
        }
        return (
            <div style={{ marginTop: '20px' }}>
                <TextInput
                    text={initial}
                    card_id={card.data.id}
                    message_id={0}
                />
            </div>
        )
    }

    const renderMessages = () => (
        <>
            {card.data.message.length > 0 && card.data.message.map((item, index) => (
                <TextInput
                    text={item}
                    card_id={card.data.id}
                    message_id={item.id}
                />
            ))}
        </>
    );



    return (
        <Draggable
            onDrag={handleDrag}
            handle="strong"
            {...dragHandlers}>
            <Card>
                <strong style={{ cursor: 'move' }}><div>{data.id} сценарий</div></strong>
                {card.data.message.length === 0 ? isEmptyMessage() : renderMessages()}
            </Card>
        </Draggable>
    );
}

export default MainCard;
