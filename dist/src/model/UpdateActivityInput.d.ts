export interface UpdateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: UpdateActivityInput.PrivacyEnum;
    name: string;
    descriptionIds?: Array<number>;
    tagTexts?: Array<string>;
    locationId?: string;
    id?: string;
}
export declare namespace UpdateActivityInput {
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_10,
        NUMBER_20,
        NUMBER_30,
    }
}
