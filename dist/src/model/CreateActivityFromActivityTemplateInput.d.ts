export interface CreateActivityFromActivityTemplateInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    alertTimings?: Array<CreateActivityFromActivityTemplateInput.AlertTimingsEnum>;
    privacy?: CreateActivityFromActivityTemplateInput.PrivacyEnum;
    activityTemplateId?: string;
}
export declare namespace CreateActivityFromActivityTemplateInput {
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
