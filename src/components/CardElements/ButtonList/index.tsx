import React, { useEffect, useRef } from 'react';
import { BodyCard } from '../../BodyCard'
import { Button, ButtonContent } from '../../../interfaces/card_interface'
import useGlobal from '../../../store'
import ReactDOM from 'react-dom';


const Btn: React.FC<{
    item: ButtonContent,
    card_id: number,
    message_id: number
}> = ({ item, card_id, message_id }) => {
    const [globalState, globalActions] = useGlobal();
    let position = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (position.current !== null) {
            globalActions.addPositionBtn(card_id, message_id, item.id, position.current.offsetTop, position.current.offsetWidth, position.current.offsetHeight)
            // console.log(position.current.offsetTop)
            // console.log(position.current.offsetWidth)
            // console.log(position.current.offsetHeight)
        }
    }, []);
    return (
        <div ref={position} style={{ padding: 0, background: '#cd3c78', marginBottom: '5px', paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '3px' }}>
            <p style={{ padding: 0, marginBottom: '0rem', color: 'white' }}>{item.label}</p>
        </div>
    )
}

const ButtonList: React.FC<{
    buttons: Button,
    card_id: number,
    message_id: number
}> = ({ buttons, card_id, message_id }) => {
    const [globalState, globalActions] = useGlobal();

    const onClick = () => {
        globalActions.onClickModal(true, card_id, message_id, 'current')
    }
    return (
        <BodyCard card_id={card_id} message_id={message_id}>
            <div onClick={() => onClick()} style={{ border: '1px solid #cccfe0', width: '100%', borderRadius: '3px', padding: '5px', paddingBottom: '0px', cursor: 'pointer' }}>
                {buttons.contentButton.map((item, index) =>
                    <Btn item={item} key={index} card_id={card_id} message_id={message_id} />
                )}
            </div>
        </BodyCard >
    );
}

export default ButtonList;
