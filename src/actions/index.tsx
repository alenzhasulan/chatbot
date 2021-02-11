import globalHook, { Store } from 'use-global-hook';
import { MyState, MyAssociatedActions } from '../store'
import {
    Message,
    Text,
    ReadingTypes,
    Video,
    Image,
    Button,
    Input,
    Gallery,
    Position,
    AllMessage, ButtonInterface,
    CardProps,
    Chat

} from '../interfaces/card_interface'

import { createMessage } from '../utils'
import { updateChatAPI } from '../api'

import useGlobal from '../store'

export const otherAction = (
    store: Store<MyState, MyAssociatedActions>,
    other: boolean
) => { /* cool stuff */ };

export const onClickModal = (
    store: Store<MyState, MyAssociatedActions>,
    visible: boolean,
    card_id: number | null,
    message_id: number | null,
    modal_type: 'current' | 'create' | null
) => {
    store.setState({
        ...store.state,
        modalState: {
            visible: visible,
            card_id: card_id,
            message_id: message_id,
            modal_type: modal_type
        }
    })
};

export const setChat = (
    store: Store<MyState, MyAssociatedActions>,
    chat: Chat
) => {
    store.setState({ ...store.state, chat: chat })
};

export const setCards = (
    store: Store<MyState, MyAssociatedActions>,
    cards: Array<CardProps>
) => {
    store.setState({ ...store.state, cards: cards })
};


export const removeEmptyMessage = (
    store: Store<MyState, MyAssociatedActions>,
    card_id: number,
    message_id: number
) => {
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    if (card_index >= 0) {
        let message_index = newCards[card_index].messages.findIndex(i => i.id === message_id)
        newCards[card_index].messages.splice(message_index, 1);
        if (newCards[card_index].messages.length === 0) {
            const message = createMessage('text', 0)
            newCards[card_index].messages.push(message)
        }
        store.setState({ ...store.state, cards: newCards })
        updateStateWithAPI(store, [...newCards])
    }
}


export const addNewMessage = async (
    store: Store<MyState, MyAssociatedActions>,
    type_message: ReadingTypes,
    card_id: number,
    message_id: number,
    new_message?: Button | ButtonInterface
): Promise<void> => {
    const newCards = [...store.state.cards]
    const card_index = newCards.findIndex(i => i.id === card_id)
    if (card_index >= 0) {
        try {
            const newMessage: AllMessage = type_message === 'button' && new_message ? new_message : createMessage(type_message, newCards[card_index].messages.length)
            const message_index = newCards[card_index].messages.findIndex(i => i.id === message_id)
            if (message_index > -1) {
                newCards[card_index].messages.splice(message_index + 1, 0, newMessage);
                store.actions.setCards(newCards)
            }
            else {
                if (newCards[card_index].messages.length === 0) {
                    let firstMessage = createMessage('text', newCards[card_index].messages.length + 1)
                    newCards[card_index].messages.push(firstMessage)
                    newCards[card_index].messages.push(newMessage)
                    store.setState({ ...store.state, cards: newCards })
                }
            }
            updateStateWithAPI(store, [...newCards])

        } catch (error) {
            // console.log("ERrrrrrr")
            // console.log(error)
        }

    }
}


export const updateStateWithAPI = async (
    store: Store<MyState, MyAssociatedActions>,
    arr: Array<CardProps>
): Promise<void> => {
    try {
        const chat = {
            ...store.state.chat,
            cards: arr
        }
        const res = await updateChatAPI(chat);
        store.setState({ ...store.state, cards: res.data.cards })
    } catch (error) {
        console.log(error)
    }
}

export const changeMessage = (
    store: Store<MyState, MyAssociatedActions>,
    card_id: number,
    message_id: number,
    value?: string,
    button?: Button
) => {
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    console.log("chat ", store.state.chat)
    if (card_index >= 0) {
        let message_index = newCards[card_index].messages.findIndex(i => i.id === message_id)
        if (message_index >= 0) {
            let messageIndex = newCards[card_index].messages.findIndex(i => i.id === message_id)
            if (newCards[card_index].messages[messageIndex].type_message === "text") {
                newCards[card_index].messages[messageIndex].data = value
            }
            if (newCards[card_index].messages[messageIndex].type_message === 'button' && button) {
                newCards[card_index].messages[messageIndex] = {
                    ...newCards[card_index].messages[messageIndex],
                    contentButton: [...button?.contentButton]
                }
            }
        }
        else {
            let length = newCards[card_index].messages.length
            let initial: Text = createMessage('text', length, value)
            newCards[card_index].messages.push(initial)
        }
        store.setState({ ...store.state, cards: newCards })
        updateStateWithAPI(store, [...newCards])
    }
};


export const addNewCard = (
    store: Store<MyState, MyAssociatedActions>,
) => {
    let newCards = [...store.state.cards]
    newCards.push({
        id: 0,
        messages: [{
            id: 0,
            step: 0,
            data: '',
            type_message: 'text',
            type_content: 'question',
            child_id: 0
        }],
        position: {
            x: 180 + 180 * (Math.floor(newCards.length / 5) + 1),
            y: ((newCards.length - 1) % 5) * 150
        }
    })
    store.setState({ ...store.state, cards: newCards })
    updateStateWithAPI(store, [...newCards])
};


export const movePostion = (
    store: Store<MyState, MyAssociatedActions>,
    position: Position,
    card_id: number
) => {
    console.log("Change")
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    newCards[card_index].position = position
    store.setState({ ...store.state, cards: newCards })
    updateStateWithAPI(store, [...newCards])
};


export const addPositionBtn = (
    store: Store<MyState, MyAssociatedActions>,
    card_id: number,
    message_id: number,
    item_id: number,
    offsetTop: number,
    offsetWidth: number,
    offsetHeight: number
) => {
    let newCards = [...store.state.cards]

    let card_index = newCards.findIndex(i => i.id === card_id)
    if (card_index >= 0) {
        let message_index = newCards[card_index].messages.findIndex(i => i.id === message_id)
        console.log('cqwerards ', newCards[card_index].messages[message_index])
        console.log('message_index ', message_index)
        console.log('card_index ', card_index)
        if (message_index >= 0) {

            if (newCards[card_index].messages[message_index].type_message && newCards[card_index].messages[message_index].type_message === 'button') {
                let btnIndex = newCards[card_index].messages[message_index].contentButton.findIndex((z: any) => z.id === item_id)
                newCards[card_index].messages[message_index].contentButton[btnIndex] = {
                    ...newCards[card_index].messages[message_index].contentButton[btnIndex],
                    offsetTop: offsetTop,
                    offsetWidth: offsetWidth,
                    offsetHeight: offsetHeight
                }
            }
        }
    }

};


