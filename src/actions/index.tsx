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
    AllMessage
} from '../interfaces/card_interface'

import { createMessage } from '../utils'


export const otherAction = (
    store: Store<MyState, MyAssociatedActions>,
    other: boolean
) => { /* cool stuff */ };


export const removeEmptyMessage = (
    store: Store<MyState, MyAssociatedActions>,
    card_id: number,
    message_id: number
) => {
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    if (card_index >= 0) {
        let message_index = newCards[card_index].message.findIndex(i => i.id === message_id)
        newCards[card_index].message.splice(message_index, 1);
        newCards[card_index].message.map((item, index) => {
            item.id = index
            item.step = index
        })
        store.setState({ cards: newCards })
    }
}


export const addEmptyMessage = (
    store: Store<MyState, MyAssociatedActions>,
    type_message: ReadingTypes,
    card_id: number,
    message_id: number
) => {
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    if (card_index >= 0) {
        try {
            let newMessage: AllMessage = createMessage(type_message, newCards[card_index].message.length)
            let message_index = newCards[card_index].message.findIndex(i => i.id === message_id)
            if (message_index > -1) {
                newCards[card_index].message.splice(message_index + 1, 0, newMessage);
                newCards[card_index].message.map((item, index) => {
                    item.id = index
                    item.step = index
                })
                store.setState({ cards: newCards })
            }
            else {
                if (newCards[card_index].message.length === 0) {
                    let firstMessage = createMessage(type_message, newCards[card_index].message.length + 1)
                    newCards[card_index].message.push(firstMessage)
                    newCards[card_index].message.push(newMessage)
                    newCards[card_index].message.map((item, index) => {
                        item.id = index
                        item.step = index
                    })
                    store.setState({ cards: newCards })
                }
            }

        } catch (error) {
            // console.log("ERrrrrrr")
            // console.log(error)
        }

    }
}

export const addTextInCard = (
    store: Store<MyState, MyAssociatedActions>,
    card_id: number, message_id: number, value: string
) => {
    let newCards = [...store.state.cards]
    let card_index = newCards.findIndex(i => i.id === card_id)
    console.log(card_index)
    console.log(newCards)
    if (card_index >= 0) {
        let message_index = newCards[card_index].message.findIndex(i => i.id === message_id)
        if (message_index >= 0) {
            if (newCards[card_index].message[message_id].type_message === 'text') {
                newCards[card_index].message[message_id].data = value
            }
        }
        else {
            let length = newCards[card_index].message.length
            let initial: Text = createMessage('text', length, value)
            newCards[card_index].message.push(initial)
        }
        store.setState({ cards: newCards })
    }

};