export interface CreateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: CreateActivityInput.PrivacyEnum;
    votingId?: string;
    systemEventId?: string;
    alertTimings?: Array<CreateActivityInput.AlertTimingsEnum>;
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
}
