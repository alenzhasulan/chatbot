import styled from 'styled-components';


export const AddBtnView = styled.div`
    display:flex;
    background: #fff;
    cursor: pointer;
    outline: none;
    align-self: center;
    border: 1px solid rgba(21,22,28,.16);
    border-radius: 20px;
    justify-content: center;
    align-items: center
`

export const MainContainer = styled.div`
             height: 100vh; 
             overflow: hidden;
             background: rgba(243, 245, 248, 1);
             display: flex;
             flex: 1;
             flex-direction: column;
        `;

export const WorkSpace = styled.div`
            display: flex;
            flex: 1;
            overflow-x: scroll;
            overflow-y: scroll;
        `;

export const View = styled.div`
            min-width:5000px !important;
            height:5000px;
          
            transform-origin: 0 0;
        `;

export const Zoomer = styled.div`
            position:absolute;
            bottom:0;
            right:0
        `;


export const Card = styled.div`
            margin-right: 56px;
            padding: 16px;
            background: #fff;
            box-shadow: 0 1px 4px rgba(21,22,28,.1);
            border-radius: 4px;
            width: 256px;
            box-sizing: border-box;
        `;
export const TextArea = styled.textarea`
    border: 1px solid #f3f5f8;
    background: #f3f5f8;
    border-radius: 4px;
    outline: 0;
    width: 100%;
    font-size: 15px;
    line-height: 20px;
    color: #15161c;
    padding: 9px 11px;
    box-sizing: border-box;
    height:40px
`
