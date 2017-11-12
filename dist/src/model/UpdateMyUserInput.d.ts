export interface UpdateMyUserInput {
    nickname: string;
    phoneNumber?: string;
    gender?: UpdateMyUserInput.GenderEnum;
    birthday?: string;
    iconId?: string;
    coverId?: string;
}
export declare namespace UpdateMyUserInput {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
