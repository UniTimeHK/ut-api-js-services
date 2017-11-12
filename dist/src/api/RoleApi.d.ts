import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class RoleApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    roleCreate(input?: models.CreateRoleDto, extraHttpRequestParams?: any): Observable<models.RoleDto>;
    /**
     *
     * @param input
     */
    roleDelete(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    roleGet(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<models.RoleDto>;
    /**
     *
     * @param input
     */
    roleGetAll(input?: models.PagedResultRequestDto, extraHttpRequestParams?: any): Observable<models.PagedResultDtoRoleDto>;
    /**
     *
     */
    roleGetAllPermissions(extraHttpRequestParams?: any): Observable<models.ListResultDtoPermissionDto>;
    /**
     *
     * @param input
     */
    roleUpdate(input?: models.RoleDto, extraHttpRequestParams?: any): Observable<models.RoleDto>;
    /**
     *
     *
     * @param input
     */
    roleCreateWithHttpInfo(input?: models.CreateRoleDto, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    roleDeleteWithHttpInfo(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    roleGetWithHttpInfo(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    roleGetAllWithHttpInfo(input?: models.PagedResultRequestDto, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    roleGetAllPermissionsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    roleUpdateWithHttpInfo(input?: models.RoleDto, extraHttpRequestParams?: any): Observable<Response>;
}
