export interface UpdateActivityInput {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    name: string;
    descriptionIds?: Array<number>;
    tagTexts?: Array<string>;
    locationId?: string;
    id?: string;
}
