import React, { useState } from 'react';

import Header from '../../components/Header'
import { MainContainer, WorkSpace, View, Zoomer } from '../../components/Styled'
import { MainCard } from '../../components/CardElements'

import useGlobal from '../../store'


const Home: React.FC<{}> = ({ }) => {
    const [globalState, globalActions] = useGlobal();

    const [zoom, setZoom] = useState<number>(1)

    const isEmptyCards = () => <MainCard data={{ id: 0, message: [] }} />


    const renderCards = () => (
        <>
            {globalState.cards.length > 0 && globalState.cards.map((item, index) => (
                <MainCard data={item} />
            ))}
        </>
    );

    return (
        <MainContainer >
            <Header />
            <WorkSpace>
                <View style={{ transform: `scale(${zoom})`, padding: '40px' }}>
                    {globalState.cards.length !== 0 ? renderCards() : isEmptyCards()}
                </View>
                <Zoomer>
                    <p onClick={() => setZoom(zoom + 0.1)}>Увеличить</p>
                    <p>{(zoom * 100).toFixed(0)}%</p>
                    <p onClick={() => setZoom(zoom - 0.1)}>Уменшить</p>
                </Zoomer>
            </WorkSpace>
        </MainContainer >
    );
}

export default Home;
