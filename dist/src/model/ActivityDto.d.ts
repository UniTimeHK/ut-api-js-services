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
export interface ActivityDto {
    startTime?: string;
    endTime?: string;
    isAllDay?: boolean;
    privacy?: ActivityDto.PrivacyEnum;
    alertTimings?: Array<ActivityDto.AlertTimingsEnum>;
    images?: Array<models.FileDto>;
    participants?: Array<models.UserListDto>;
    name?: string;
    descriptions?: Array<models.DescriptionDto>;
    location?: models.LocationDto;
    previewToken?: string;
    ratings?: Array<models.RatingDto>;
    comments?: Array<models.CommentDto>;
    tags?: Array<models.TagDto>;
    bookmarkingUsers?: Array<models.BookmarkingUserListDto>;
    owner?: models.UserListDto;
    id?: string;
}
export declare namespace ActivityDto {
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
