export interface GetActivitiesInput {
    maxResultCount?: number;
    skipCount?: number;
    queryKeywords?: string;
    tagTexts?: Array<string>;
    userNames?: Array<string>;
    userIds?: Array<number>;
}
