import React from "react";
import globalHook, { Store } from 'use-global-hook';
import { otherAction, addTextInCard, addEmptyMessage, removeEmptyMessage } from '../actions'
import { CardProps } from '../interfaces/card_interface'

export type MyState = {
    cards: Array<CardProps>
};

// Associated actions are what's expected to be returned from globalHook
export type MyAssociatedActions = {
    otherAction: (other: boolean) => void;
    addTextInCard: (card_id: number, message_id: number, value: string) => void;
    addEmptyMessage: (type_message: string, card_id: number, message_id: number) => void;
    removeEmptyMessage: (card_id: number, message_id: number) => void;
};


const actions = {
    otherAction,
    addTextInCard,
    addEmptyMessage,
    removeEmptyMessage
};
const initialCard: CardProps = {
    id: 0,
    message: []
}
const initialState = {
    cards: [initialCard]
};

const useGlobal = globalHook<MyState, MyAssociatedActions>(
    React,
    initialState,
    actions
)

export default useGlobal;
