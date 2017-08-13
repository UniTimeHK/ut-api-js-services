export interface ChatRoomMessageListDto {
    content?: string;
    type?: ChatRoomMessageListDto.TypeEnum;
    ownerId?: number;
    creationTime?: string;
    id?: number;
}
export declare namespace ChatRoomMessageListDto {
    enum TypeEnum {
        NUMBER_0,
        NUMBER_1,
        NUMBER_2,
    }
}
