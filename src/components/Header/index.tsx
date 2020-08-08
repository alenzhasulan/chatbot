import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <View >
            <p style={{ margin: 0, fontWeight: 'bold' }}>Главная</p>
            <p style={{ margin: 0 }}>Выйти</p>
        </View>
    );
}

const View = styled.div`
background: #f8f9fa;
box-shadow: 0 1px 4px rgba(21, 22, 28, 0.1);
padding:20px;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export default Header;
