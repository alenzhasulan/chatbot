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
    const [input, setInput] = useState(text.data);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value)
    };
    return (
        <BodyCard card_id={card_id} message_id={message_id}>
            <TextArea
                onBlur={() => { globalActions.changeMessage(card_id, message_id, input) }}
                value={input}
                name="textAreaInput"
                placeholder="Сообщение от бота"
                onChange={(event) => handleChange(event)}
            />
        </BodyCard>
    )
}

export default TextInput