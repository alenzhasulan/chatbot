import React, { useEffect, useState, useRef } from 'react';

import { getChatAPI } from '../../api';
import { UserChat, UserCardProps, ButtonContent } from '../../interfaces/card_interface';
import useGlobal from '../../store'
import { CSSTransition } from 'react-transition-group';


const MessageUser: React.FC<{ isViewChat: boolean, chatId: number }> = ({ isViewChat, chatId }) => {
    const [chat, setChat] = useState<UserChat>()
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState<UserCardProps[]>([])
    const isTyping = useRef(null);
    useEffect(() => {
        console.log("chat_idiid", chatId)
        getList(chatId)
    }, [isViewChat]);




    const getList = async (chat_id: number) => {
        try {
            setLoading(true)
            let res = await getChatAPI(chat_id)
            let own = res.data
            console.log(own)
            setChat(own)
            setCards([own.cards[0]])
            setLoading(false)

        } catch (error) {
        }
    }

    const sendMessage = (button: ButtonContent, card_index: number) => {
        // ANSWER USER
        let newCards = [...cards]
        newCards[card_index].answer_user = button
        setCards(newCards)

        // TYPING BOT
        if (chat) {
            let new_card_index = chat?.cards.findIndex(i => i.id === button.to_id)
            console.log('new_card_index ', new_card_index)
            if (new_card_index && new_card_index > -1) {
                console.log([...newCards, chat?.cards[new_card_index]])
                setTimeout(() => { setCards([...newCards, chat?.cards[new_card_index]]) }, 1500)
            }
        }


    }
    return (
        <div style={{ display: 'flex', flex: 1, padding: 10, backgroundColor: '#f5f5f5' }}>
            <div key='chat'>
                {cards.length > 0 &&
                    cards.map((card, card_index) =>
                        <div>
                            {card.messages.map((message, message_index) =>
                                <div >
                                    {message.type_message === 'text' &&
                                        <div>
                                            <p style={{ padding: 0, margin: 0, fontFamily: 'cursive' }}>{message.data}</p>
                                        </div>

                                    }
                                    {
                                        (!card.answer_user || card.answer_user === null) && message.type_message === 'button' &&
                                        <div style={{ marginTop: 15 }}>
                                            {message.contentButton.map((button, btn_index) =>
                                                <div
                                                    onClick={() => { console.log("br"); sendMessage(button, card_index) }}
                                                    style={{ backgroundColor: '#6610f2', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, borderRadius: 5, cursor: 'pointer' }}>
                                                    <p style={{ padding: 0, margin: 0, color: 'white', }}>{button.label}</p>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </div>
                            )}
                            {
                                card.answer_user && card.answer_user !== null &&
                                <p style={{ textAlign: 'right', fontWeight: 'bold', margin: 0, padding: 0 }}>{card.answer_user.label}</p>
                            }
                            {
                                <p id="isTyping" style={{ fontWeight: 'bold' }}></p>
                            }
                        </div>
                    )

                }
            </div>
        </div>

    );
}

export default MessageUser;
