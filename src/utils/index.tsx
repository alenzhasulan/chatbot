import {
    Message,
    Text,
    ReadingTypes,
    Video,
    Image,
    Button,
    Input,
    Gallery
} from '../interfaces/card_interface'


export const createMessage = (
    type_message: ReadingTypes,
    index: number,
    value?: string,
) => {
    let newMessage: Text | Video | Image | Button | Input

    switch (type_message) {
        case 'text':
            newMessage = {
                id: 0,
                step: index,
                data: value || '',
                type_message: 'text',
                type_content: 'question',
                child_id: 0,
                url: null
            }
            break;
        case 'image':
            newMessage = {
                id: index + 1,
                step: index + 1,
                url: '',
                type_message: 'image',
                type_content: 'question',
                child_id: 0
            }
        case 'button':
            newMessage = {
                id: index + 1,
                step: index + 1,
                contentButton: [],
                type_message: 'button',
                type_content: 'answer',
                child_id: 0
            }
        default:
            throw new Error(
                'Invalid type message'
            )
            break;
    }



    return newMessage

}


export const drawCurve = (startX: number, startY: number, endX: number, endY: number) => {

    // exemple of a path: M318,345 L330,345 C450,345 380,124 504,124 L519,124

    // M
    var AX = startX;
    var AY = startY;

    // L
    var BX = Math.abs(endX - startX) * 0.05 + startX;
    var BY = startY;

    // C
    var CX = (endX - startX) * 0.66 + startX;
    var CY = startY;
    var DX = (endX - startX) * 0.33 + startX;
    var DY = endY;
    var EX = - Math.abs(endX - startX) * 0.05 + endX;
    var EY = endY;

    // L
    var FX = endX;
    var FY = endY;

    // [DEBUGGING] add all the colored points for testing


    // setting up the path string
    var path = 'M' + AX + ',' + AY;
    path += ' L' + BX + ',' + BY;
    path += ' ' + 'C' + CX + ',' + CY;
    path += ' ' + DX + ',' + DY;
    path += ' ' + EX + ',' + EY;
    path += ' L' + FX + ',' + FY;

    return path
}


