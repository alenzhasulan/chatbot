import React, { useState, useEffect, useRef } from 'react';
import { ListGroup } from 'react-bootstrap'
import { AddBtnView } from '../Styled'
import { useOutside } from '../OutSide'
import useGlobal from '../../store'
import { ReadingTypes } from '../../interfaces/card_interface'



export const AddBtn: React.FC<{
    initialDropdown?: boolean;
    size?: number,
    card_id: number,
    message_id: number
}> = ({ initialDropdown = false, size, card_id, message_id }) => {

    const [globalState, globalActions] = useGlobal();
    const wrapperRef = useRef(null);
    const [visibleDropdown, setVisibleDropdown] = useState(initialDropdown)
    useOutside(wrapperRef, setVisibleDropdown, visibleDropdown);

    const onClick = (item: ReadingTypes) => {
        if (item === 'button') {
            globalActions.onClickModal(true, card_id, message_id, 'create')
        }
        else {
            globalActions.addNewMessage(item, card_id, message_id)
        }

    }

    const list: Array<ReadingTypes> = ['text', 'video', 'image', 'button', 'gallery', 'input']

    return (
        <div ref={wrapperRef} style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', paddingTop: '10px' }}>
            <AddBtnView style={{ width: size, height: size }} onClick={() => setVisibleDropdown(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.0005 20V13H20.0005V11H13.0005V4H11.0005V11H4.00049V13H11.0005V20H13.0005Z" fill="#15161C" />
                </svg>
            </AddBtnView>
            {visibleDropdown &&
                <div style={{ position: 'absolute', width: 200, right: 0, paddingTop: 25, paddingLeft: 20, paddingRight: 20 }}>
                    <ListGroup >
                        {list.map((item: ReadingTypes, index: number) =>
                            <ListGroup.Item onClick={() => onClick(item)} style={{ cursor: 'pointer' }} variant="primary">{item}</ListGroup.Item>
                        )}
                    </ListGroup>
                </div>
            }
        </div>
    )
}

