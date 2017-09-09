export interface UserDto {
    emailAddress?: string;
    lastLoginTime?: string;
    birthday?: string;
    gender?: UserDto.GenderEnum;
    coverId?: string;
    userName?: string;
    iconId?: string;
    nickname?: string;
    isAuthorized?: string;
    id?: number;
}
export declare namespace UserDto {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
