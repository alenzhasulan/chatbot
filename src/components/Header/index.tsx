import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'react-bootstrap'
import { Eye, ArrowLeft } from 'react-bootstrap-icons';
const Header: React.FC<{ title: String, onBack?: Function, onRihgt?: Function }> = ({ title, onBack, onRihgt }): JSX.Element => {
    return (
        <View >
            <div key={'left'}>{onBack && <ArrowLeft style={{ cursor: 'pointer' }} size={24} onClick={() => onBack()} />}</div>

            <p key={'center'} style={{ margin: 0, fontWeight: 'bold', fontSize: 18, textAlign: 'center', }}>{title}</p>

            <div style={{ cursor: 'pointer' }} key={'right'}>
                {onRihgt &&
                    <div onClick={() => onRihgt()} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <Eye size={16} />
                        <p key={'center'} style={{ margin: 0, fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginLeft: 5 }}>Предварительный просмотр</p>
                    </div>
                }
            </div>
            {/* <Button variant="success"><Check2Square style={{ width: 18, height: 18, color: 'white', marginBottom: 0 }} />Опубликовать</Button> */}
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
