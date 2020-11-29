import React, { useState, useEffect, useRef } from 'react';
import { Text, Message } from '../../../interfaces/card_interface'
import { BodyCard } from '../../BodyCard'
import { TextArea } from '../../Styled/index'
import useGlobal from '../../../store'

const TextInput: React.FC<{
    text: Text | Message,
    card_id: number,
    message_id: number
}> = ({ text, card_id, message_id }) => {

    const [globalState, globalActions] = useGlobal();

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        globalActions.changeMessage(card_id, message_id, event.target.value)
        // setInput(card_id, message_id, event.target.value)
    };

    return (
        <BodyCard card_id={card_id} message_id={message_id}>
            <TextArea
                value={text.data}
                name="textAreaInput"
                placeholder="Сообщение от бота"
                onChange={(event) => handleChange(event)}
            />
        </BodyCard>
    )
}

export default TextInput