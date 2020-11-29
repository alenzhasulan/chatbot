export interface CardProps {
    id: number,
    messages: Array<Video | Text | Image | Button | Gallery | Input>,
    position: Position
}

export type Position = { x: number, y: number }

export type ReadingTypes = 'text' | 'video' | 'image' | 'button' | 'gallery' | 'input';

export interface Message {
    id: number,
    step: number,
    [propName: string]: any;
    type_message: ReadingTypes,
}

export interface Text extends Message {
    data: string,
    readonly type_message: 'text',
    readonly type_content: 'question',
}

export interface Video extends Message {
    url: string,
    readonly type_message: 'video',
    readonly type_content: 'question',
}

export interface Image extends Message {
    url: string,
    readonly type_message: 'image',
    readonly type_content: 'question',
}

export interface Button extends Message {
    contentButton: Array<ButtonContent>,
    readonly type_message: 'button',
    readonly type_content: 'answer',
}

export interface ButtonInterface extends Button {
}

export interface ButtonContent {
    id: number,
    label: string,
    to_id: number | null
    offsetTop: number | null,
    offsetWidth: number | null,
    offsetHeight: number | null
}

export interface Gallery extends Message {
    contentGallery: Array<GalleryContent>,
    readonly type_message: 'gallery',
    readonly type_content: 'answer',
}

export interface GalleryContent {
    title: string,
    description: string,
    img: string,
    to_id: number
}


export interface Input extends Message {
    placeholder: string,
    to_id: number,
    readonly type_message: 'input',
    readonly type_content: 'answer',
}

export type AllMessage = Text | Video | Image | Button | Input | Gallery | ButtonInterface