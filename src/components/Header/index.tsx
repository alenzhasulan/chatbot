import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'react-bootstrap'
import { Check2Square } from 'react-bootstrap-icons';
const Header: React.FC<{ title: String, }> = ({ title }) => {
    return (
        <View >
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: 18 }}>{title}</p>
            <Button variant="success"><Check2Square style={{ width: 18, height: 18, color: 'white', marginBottom: 0 }} />Опубликовать</Button>
        </View>
    );
}

const View = styled.div`
background: #f8f9fa;
box-shadow: 0 3px 4px rgba(21, 22, 28, 0.1);
padding:18px;
padding-left:30px;

display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
z-index: 1;
`;

export default Header;
