export interface UpdateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    alertTimings?: Array<UpdateActivityInput.AlertTimingsEnum>;
    privacy?: UpdateActivityInput.PrivacyEnum;
    name: string;
    descriptionIds?: Array<number>;
    tagTexts?: Array<string>;
    locationId?: string;
    id?: string;
}
export declare namespace UpdateActivityInput {
    enum AlertTimingsEnum {
        _0,
        _1,
        _2,
        _3,
        _4,
        _5,
        _6,
        _7,
        _8,
    }
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_10,
        NUMBER_20,
        NUMBER_30,
    }
}
