import React, { useState } from 'react';
import { Alert, Carousel, Dropdown } from 'react-bootstrap'

import styled from 'styled-components';
import useGlobal from '../../store'
import { Button, Message } from '../../interfaces/card_interface'
// @ts-ignore
import ItemsCarousel from 'react-items-carousel';


interface StateBtn {
    inner: boolean;
}
const Btn: React.FC<{
    item: any,
    onChangeInput: (id: number, value: string) => void,
    onDropDown: (id: number, to_id: number) => void
}> = ({ item, onChangeInput, onDropDown }) => {
    const [inner, setInner] = useState<StateBtn>({ inner: false })
    const [globalState, globalActions] = useGlobal();

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(item.id, event.target.value)
    };


    return (
        <div
            onMouseMove={() => setInner({ inner: true })}
            onMouseLeave={() => setInner({ inner: false })}
            style={{ border: '1px solid #cccfe0', width: '100%', borderRadius: '3px', padding: '6px', height: '90px', marginLeft: '5px', boxShadow: inner.inner ? 'grey 2px 2px 10px 0px' : 'white 0px 0px 0px 0px' }}>
            <input
                onChange={e => onChangeText(e)}
                value={item.label}
                placeholder={"Текст на кнопке"}
                style={{ flex: 1, display: 'flex', width: '100%', background: '#f3f5f8', border: '0px', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px', }}
            />
            <Dropdown style={{ width: '100%' }}>
                <Dropdown.Toggle style={{ width: '100%', marginTop: '5px', background: '#f3f5f8', border: '0px', color: 'black' }} id="dropdown-basic">
                    {item.to_id !== null ? item.to_id + ' шаг' : 'Выберите шаг'}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    {globalState.cards.map((i, index) => (
                        <Dropdown.Item
                            active={i.id === item.to_id}
                            onClick={() => { onDropDown(item.id, i.id) }}
                        >{i.id} шаг</Dropdown.Item>
                    ))}
                    <Dropdown.Item onClick={async () => {
                        let i = globalState.cards.length
                        globalActions.addNewCard()
                        // onDropDown(item.id, i)

                    }}>Создать новый шаг</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}



const ButtonModal: React.FC<{}> = ({ }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [globalState, globalActions] = useGlobal();
    const chevronWidth = 0;
    const { card_id, message_id, modal_type } = globalState.modalState

    const getButton = () => {
        let list: Button = {
            type_message: 'button',
            type_content: 'answer',
            id: 1,
            step: 1,
            contentButton: [],
            child_id: 0
        }
        if (modal_type === 'create') {
            return list
        }
        else {
            if (typeof card_id === 'number' && typeof message_id === 'number') {
                let card_index = globalState.cards.findIndex((i) => i.id === card_id)
                let index = globalState.cards[card_index].messages.findIndex((i) => i.id === message_id)
                if (globalState.cards[card_index].messages[index].type_message === 'button') {
                    let buttons: Button = {
                        type_message: 'button',
                        type_content: 'answer',
                        id: globalState.cards[card_index].messages[index].id,
                        step: globalState.cards[card_index].messages[index].step,
                        child_id: globalState.cards[card_index].messages[index].child_id,
                        contentButton: [
                            ...globalState.cards[card_index].messages[index].contentButton
                        ],
                    }
                    // globalState.cards[card_id].message[message_id]
                    return buttons
                }

            }
        }
        return list
    }

    const [button, setButton] = useState<Button>(getButton())


    const onSave = () => {
        if (modal_type === 'create') {
            if (typeof card_id === 'number' && typeof message_id === 'number') {
                globalActions.addNewMessage('button', card_id, message_id, button)
                globalActions.onClickModal(false, null, null, null)
            }
        }
        else {
            if (typeof card_id === 'number' && typeof message_id === 'number') {
                globalActions.changeMessage(card_id, message_id, undefined, button)
                globalActions.onClickModal(false, null, null, null)
            }
        }

    }

    const onChangeInput = (id: number, value: string) => {
        let newbutton = { ...button }
        let btn_index = newbutton.contentButton.findIndex(i => i.id === id)
        if (btn_index >= 0) {
            newbutton.contentButton[btn_index].label = value
            setButton(newbutton)
        }
    }
    const onDropDown = (id: number, to_id: number) => {
        let newbutton = { ...button }
        let btn_index = newbutton.contentButton.findIndex(i => i.id === id)
        if (btn_index >= 0) {
            newbutton.contentButton[btn_index].to_id = to_id
            setButton(newbutton)
        }
    }
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ marginBottom: '0rem', fontWeight: 'bold' }}>Кнопка</p>
                <p onClick={() => onSave()} style={{ marginBottom: '0rem', fontWeight: 'bold', color: 'green', cursor: 'pointer' }}>Сохранить</p>
            </div>
            <Alert key={0} variant={'primary'} style={{ marginTop: 15, marginLeft: -20, marginRight: -20 }}>
                <Alert.Link href="#">Узнать больше</Alert.Link> об использовании инструмента кнопка
            </Alert>
            <div style={{ padding: `0 ${chevronWidth}px`, marginTop: '20px', marginLeft: '-20px', marginRight: '-20px', zIndex: 999, }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    numberOfPlaceholderItems={5}
                    showSlither={true}
                    gutter={20}
                    leftChevron={<LedtButton>{'<'}</LedtButton>}
                    rightChevron={<RightButton >{'>'}</RightButton>}
                    outsideChevron={false}
                    chevronWidth={chevronWidth}
                >
                    {button.contentButton.map((item: any) =>
                        <div style={{ height: '300px' }}>
                            <Btn item={item} onChangeInput={onChangeInput} onDropDown={onDropDown} />
                        </div>
                    )}

                    <div
                        style={{ height: '90px', marginLeft: '20px' }}>
                        <AddButton
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                console.log("rev")
                                setButton({
                                    ...button,
                                    contentButton: [
                                        ...button.contentButton,
                                        {
                                            label: '',
                                            to_id: null,
                                            id: button.contentButton.length,
                                            offsetTop: null,
                                            offsetHeight: null,
                                            offsetWidth: null
                                        }
                                    ]
                                })
                            }
                            }>
                            <p style={{ marginBottom: '0rem', fontSize: '24px', color: '#0A59F8', fontWeight: 'bold' }}>+</p>
                            <p style={{ marginBottom: '0rem', color: '#0A59F8', fontWeight: 'normal' }}>Добавить кнопку</p>
                        </AddButton>
                    </div>
                </ItemsCarousel>
            </div>
        </div>
    );
}


export const RightButton = styled.button`
position: absolute;
top: 28px;
right: 10px; 
width: 40px;
height: 40px; 
color: white; 
background: black; 
border: 50px;
display: flex; 
flex: 1;
align-items: center;
justify-content: center; 
padding-bottom: 5px;
border-radius: 50px;
`

export const LedtButton = styled.button`
position: absolute;
top: 28px;
left: 10px; 
width: 40px;
height: 40px; 
color: white; 
background: black; 
border: 50px;
display: flex; 
flex: 1;
align-items: center;
justify-content: center; 
padding-bottom: 5px;
border-radius: 50px;
`

const AddButton = styled.div`
    width: 100%;
    border: 1px dashed rgba(21, 22, 28, 0.36);
    cursor: pointer;
    height: 100%;
    display: flex;
    background: #ffffff;
    box-sizing: border-box;
    align-items: center;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    height: '200px';
`


export default ButtonModal;
