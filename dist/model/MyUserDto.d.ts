export interface MyUserDto {
    phoneNumber?: string;
    emailAddress?: string;
    isEmailConfirmed?: boolean;
    lastLoginTime?: string;
    birthday?: string;
    gender?: MyUserDto.GenderEnum;
    coverId?: string;
    userName?: string;
    iconId?: string;
    nickname?: string;
    id?: number;
}
export declare namespace MyUserDto {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
