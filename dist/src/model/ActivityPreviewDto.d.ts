/**
 * UniTime API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import * as models from './models';
export interface ActivityPreviewDto {
    name?: string;
    descriptions?: Array<models.DescriptionDto>;
    location?: models.LocationDto;
    ratings?: Array<models.RatingDto>;
    comments?: Array<models.CommentDto>;
    tags?: Array<models.TagDto>;
    owner?: models.UserListDto;
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: ActivityPreviewDto.PrivacyEnum;
    participants?: Array<models.UserListDto>;
    id?: string;
}
export declare namespace ActivityPreviewDto {
    enum PrivacyEnum {
        NUMBER_0,
        NUMBER_10,
        NUMBER_20,
        NUMBER_30,
    }
}
