export interface CreateActivityFromActivityTemplateInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: CreateActivityFromActivityTemplateInput.PrivacyEnum;
    activityTemplateId?: string;
}
export declare namespace CreateActivityFromActivityTemplateInput {
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_10,
        NUMBER_20,
        NUMBER_30,
    }
}
