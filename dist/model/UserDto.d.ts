export interface UserDto {
    emailAddress?: string;
    isEmailConfirmed?: boolean;
    lastLoginTime?: string;
    birthday?: string;
    gender?: UserDto.GenderEnum;
    coverId?: string;
    userName?: string;
    iconId?: string;
    nickname?: string;
    id?: number;
}
export declare namespace UserDto {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
