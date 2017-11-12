export interface ApplicationInfoDto {
    version?: string;
    releaseDate?: string;
    features?: {
        [key: string]: boolean;
    };
}
