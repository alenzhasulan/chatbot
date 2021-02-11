import React from "react";
import globalHook, { Store } from 'use-global-hook';
import {
    otherAction,
    changeMessage,
    addNewMessage,
    removeEmptyMessage,
    onClickModal,
    addNewCard,
    movePostion,
    addPositionBtn,
    setCards,
    setChat,
    updateStateWithAPI
} from '../actions'
import { CardProps, Button, Gallery, ReadingTypes, Position, Chat } from '../interfaces/card_interface'

export type MyState = {
    cards: Array<CardProps>,
    modalState: {
        visible: boolean,
        card_id: number | null,
        message_id: number | null,
        modal_type: 'current' | 'create' | null
    },
    chat: Chat
};

// Associated actions are what's expected to be returned from globalHook
export type MyAssociatedActions = {
    setChat: (cards: Array<Chat>) => void;
    setCards: (cards: Array<CardProps>) => void;
    otherAction: (other: boolean) => void;
    changeMessage: (card_id: number, message_id: number, value?: string, button?: Button) => void;
    addNewMessage: (type_message: ReadingTypes, card_id: number, message_id: number, new_message?: Button | Gallery) => Promise<void>;
    removeEmptyMessage: (card_id: number, message_id: number) => void;
    onClickModal: (visible: boolean, card_id: number | null, message_id: number | null, modal_type: 'current' | 'create' | null) => void;
    addNewCard: () => void;
    movePostion: (position: Position, card_id: number) => void;
    addPositionBtn: (card_id: number, message_id: number, item_id: number, offsetTop: number, offsetWidth: number, offsetHeight: number) => void;
    updateStateWithAPI: (cards: Array<CardProps>) => Promise<void>;
};


const actions = {
    setChat,
    setCards,
    otherAction,
    changeMessage,
    addNewMessage,
    removeEmptyMessage,
    onClickModal,
    addNewCard,
    movePostion,
    addPositionBtn,
    updateStateWithAPI
};
const initialCard: CardProps = {
    id: 0,
    messages: [{
        id: 0,
        step: 0,
        data: '',
        type_message: 'text',
        type_content: 'question',
        child_id: 0
    }],
    position: { x: 10, y: 100 }
}
const initialState = {
    cards: [initialCard],
    modalState: {
        visible: false,
        card_id: null,
        message_id: null,
        modal_type: null
    },
    chat: {
        id: 0,
        name: "Welcome",
        cards: []
    }
};

const useGlobal = globalHook<MyState, MyAssociatedActions>(
    React,
    initialState,
    actions
)

export default useGlobal;
