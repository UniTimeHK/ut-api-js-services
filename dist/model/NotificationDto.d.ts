export interface NotificationDto {
    content?: string;
    heading?: string;
    data?: {
        [key: string]: string;
    };
    hasRead?: boolean;
    id?: number;
}
