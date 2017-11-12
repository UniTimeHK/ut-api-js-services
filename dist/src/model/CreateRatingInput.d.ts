export interface CreateRatingInput {
    ratingStatus?: CreateRatingInput.RatingStatusEnum;
    activityId?: string;
    activityPlanId?: string;
    activityTemplateId?: string;
}
export declare namespace CreateRatingInput {
    enum RatingStatusEnum {
        NUMBER_0,
        NUMBER_1,
    }
}
