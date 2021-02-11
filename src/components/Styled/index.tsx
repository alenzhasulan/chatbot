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
            bottom:20px;
            right:20px;
            z-index:10
        `;

interface Props {
    zIndex: any;
}
export const ChatViewer = styled.div<Props>`
            position:absolute;
            bottom:20px;
            right:20px;
            z-index:${p => p.zIndex};
            width:300px;
            height:450px;
            background-color: #f5f5f5;
            overflow-y: scroll;
            border-radius:10px;
        `;


export const Card = styled.div`
            padding: 0px;
            background: #e6e7f2;
            box-shadow: 0 1px 4px rgba(21,22,28,.1);
            border-radius: 10px;
            width: 256px;
            max-width:256px;
            box-sizing: border-box;
            position: absolute;
           
        `;
export const TextArea = styled.textarea`
    border: 1px solid #f3f5f8;
    background: white;
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

export const ChatCard = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 40px;
margin-right: 40px;
margin-top: 15px;
margin-bottom: 15px;
padding: 15px;
padding-left: 25px;
padding-right: 25px;
box-shadow: 0 1px 4px rgba(21,22,28,.1);
background-color: white;
align-items: center;
border-radius: 4px;
cursor: pointer
`