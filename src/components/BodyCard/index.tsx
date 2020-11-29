import React, { useState, useEffect, useRef } from 'react';

import trash from '../../assets/trash.png'
import { AddBtn } from '../AddBtn'
import useGlobal from '../../store'


export const BodyCard: React.FC<{
    innerInitial?: boolean,
    children: React.ReactNode
    card_id: number,
    message_id: number
}> = ({ innerInitial = false, children, card_id, message_id }) => {
    const [inner, setInner] = useState(innerInitial)
    const [globalState, globalActions] = useGlobal();

    return (
        <div
            onMouseMove={() => setInner(true)}
            onMouseLeave={() => setInner(false)}
            style={{ marginTop: '10px', }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: inner ? 'grey 2px 2px 10px 0px' : 'white 0px 0px 0px 0px' }}>
                {children}
                {inner &&
                    <div style={{ marginRight: -80, paddingLeft: 30 }}>
                        <img
                            src={trash}
                            onClick={() => globalActions.removeEmptyMessage(card_id, message_id)}
                            style={{ width: 28, color: 'white', cursor: 'pointer' }} />
                    </div>
                }
            </div>
            {inner && <AddBtn size={24} card_id={card_id} message_id={message_id} />}
        </div>
    )
}