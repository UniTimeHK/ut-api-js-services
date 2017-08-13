export interface CreateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: CreateActivityInput.PrivacyEnum;
    name: string;
    locationId?: string;
    tagTexts: Array<string>;
}
export declare namespace CreateActivityInput {
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_1,
        NUMBER_2,
    }
}
