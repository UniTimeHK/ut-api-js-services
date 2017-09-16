export interface CreateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: CreateActivityInput.PrivacyEnum;
    votingId?: string;
    name: string;
    locationId?: string;
    tagTexts: Array<string>;
}
export declare namespace CreateActivityInput {
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_10,
        NUMBER_20,
        NUMBER_30,
    }
}
