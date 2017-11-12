export interface GetMyCollegematesInput {
    maxResultCount?: number;
    gender?: GetMyCollegematesInput.GenderEnum;
    hasOnlyMyInstitutions?: boolean;
    skipCount?: number;
}
export declare namespace GetMyCollegematesInput {
    enum GenderEnum {
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
