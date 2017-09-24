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

export interface InvitationDto {
    content?: string;

    status?: InvitationDto.StatusEnum;

    receiver?: models.UserListDto;

    sender?: models.UserListDto;

    id?: string;

}
export namespace InvitationDto {
    export enum StatusEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2,
        NUMBER_3 = <any> 3,
        NUMBER_4 = <any> 4
    }
}
