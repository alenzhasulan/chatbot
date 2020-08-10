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
    value?: string
) => {
    let newMessage: Text | Video | Image | Button | Input | Gallery

    switch (type_message) {
        case 'text':
            newMessage = {
                id: index,
                step: index,
                data: value || '',
                type_message: 'text',
                type_content: 'question'
            }
            break;
        case 'image':
            newMessage = {
                id: index + 1,
                step: index + 1,
                url: '',
                type_message: 'image',
                type_content: 'question'
            }
        default:
            throw new Error(
                'Invalid type message'
            )
            break;
    }



    return newMessage

}