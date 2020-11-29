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
    addPositionBtn
} from '../actions'
import { CardProps, Button, Gallery, ReadingTypes, Position } from '../interfaces/card_interface'

export type MyState = {
    cards: Array<CardProps>,
    modalState: {
        visible: boolean,
        card_id: number | null,
        message_id: number | null,
        modal_type: 'current' | 'create' | null
    }
};

// Associated actions are what's expected to be returned from globalHook
export type MyAssociatedActions = {
    otherAction: (other: boolean) => void;
    changeMessage: (card_id: number, message_id: number, value?: string, button?: Button) => void;
    addNewMessage: (type_message: ReadingTypes, card_id: number, message_id: number, new_message?: Button | Gallery) => void;
    removeEmptyMessage: (card_id: number, message_id: number) => void;
    onClickModal: (visible: boolean, card_id: number | null, message_id: number | null, modal_type: 'current' | 'create' | null) => void;
    addNewCard: () => void;
    movePostion: (position: Position, card_id: number) => void;
    addPositionBtn: (card_id: number, message_id: number, item_id: number, offsetTop: number, offsetWidth: number, offsetHeight: number) => void;

};


const actions = {
    otherAction,
    changeMessage,
    addNewMessage,
    removeEmptyMessage,
    onClickModal,
    addNewCard,
    movePostion,
    addPositionBtn
};
const initialCard: CardProps = {
    id: 0,
    messages: [{
        id: 0,
        step: 0,
        data: '',
        type_message: 'text',
        type_content: 'question'
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
    }
};

const useGlobal = globalHook<MyState, MyAssociatedActions>(
    React,
    initialState,
    actions
)

export default useGlobal;
