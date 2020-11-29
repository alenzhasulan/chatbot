import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap'
import menu from '../../assets/bot.png'
import { HouseDoor, DoorOpenFill, ChatDotsFill, InfoSquare, Globe, ChatSquareDots } from 'react-bootstrap-icons';

const NavMenu: React.FC = () => {
    const list = [
        {
            name: 'Главная',
            icon: () => <HouseDoor style={{ width: 24, height: 24, color: 'white' }} />
        },
        {
            name: 'Чат боты',
            icon: () => <ChatDotsFill style={{ width: 24, height: 24, color: 'white' }} />
        },
        {
            name: 'Помощь',
            icon: () => <InfoSquare style={{ width: 24, height: 24, color: 'white' }} />
        },
        {
            name: 'Руский',
            icon: () => <Globe style={{ width: 24, height: 24, color: 'white' }} />
        },
        {
            name: 'Выйти',
            icon: () => <DoorOpenFill style={{ width: 24, height: 24, color: 'white' }} />
        }
    ]
    return (
        <StyledSideNav>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src={menu}
                    style={{ width: 50, height: 50, color: 'white', cursor: 'pointer', }} />
                <p style={{ marginBottom: '0rem', color: 'white', marginLeft: '10px', fontSize: 22, fontWeight: 'bold' }}>Chat Bot</p>
            </div>

            <div style={{}}>
                {list.map((item) =>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20, borderBottom: '0.001px solid white', cursor: 'pointer' }}>
                        {item.icon()}
                        <p style={{ marginBottom: '0rem', color: 'white', fontSize: 16, marginLeft: 20 }}>{item.name}</p>

                    </div>
                )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h5 style={{ textAlign: 'center', color: 'white', marginBottom: 20, }}>Бесплатная{'\n'}консультация</h5>
                <ChatSquareDots style={{ width: 50, height: 50, color: 'white', marginBottom: 20 }} />
                <Button style={{ width: '80%', fontWeight: 'bold', padding: 15 }} variant="primary">Напишите нам</Button>
            </div>
        </StyledSideNav>
    );
}

const StyledSideNav = styled.div`
background-color: rgb(37 53 74);
 min-height: 100vh !important;
 display: flex;
 flex:1;
 justify-content: space-evenly;
 flex-direction: column;
 
`;



export default NavMenu;
