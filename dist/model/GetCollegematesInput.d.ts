export interface GetCollegematesInput {
    maxResultCount?: number;
    gender?: GetCollegematesInput.GenderEnum;
    skipCount?: number;
}
export declare namespace GetCollegematesInput {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
