import React, { useState, useEffect } from 'react';
import { MainContainer, ChatCard } from '../../components/Styled';
import Header from '../../components/Header'
import { getChatsAPI } from '../../api'
import { useHistory } from "react-router-dom";

const Chats: React.FC = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        getList()
    }, []);

    const getList = async () => {
        try {
            setLoading(true)
            const res = await getChatsAPI()
            console.log(res)
            setList(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error.response)
        }
    }
    return (
        <MainContainer style={{ overflow: 'auto' }}>
            <Header title={'Мои чаты'} />
            <div style={{ flex: 1 }}>
                {!loading && error === null && list.length > 0 && list.map((item, index) =>
                    <ChatCard
                        onClick={() => {
                            history.push({
                                pathname: '/chat',
                                state: { chat_id: item.id }
                            });
                        }}
                    >
                        <div>
                            <p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>{item && item.name}</p>
                            <p style={{ padding: 0, margin: 0, fontFamily: 'revert' }}>07 авг. 2020 12:13</p>
                        </div>
                        <div style={{ background: '#bfffbf', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 4 }}>
                            <p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Активен</p>
                        </div>
                    </ChatCard>
                )}
            </div>
        </MainContainer>
    );
}

export default Chats;


