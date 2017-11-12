import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class TenantApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    tenantCreate(input?: models.CreateTenantDto, extraHttpRequestParams?: any): Observable<models.TenantDto>;
    /**
     *
     * @param input
     */
    tenantDelete(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    tenantGet(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<models.TenantDto>;
    /**
     *
     * @param input
     */
    tenantGetAll(input?: models.PagedResultRequestDto, extraHttpRequestParams?: any): Observable<models.PagedResultDtoTenantDto>;
    /**
     *
     * @param input
     */
    tenantUpdate(input?: models.TenantDto, extraHttpRequestParams?: any): Observable<models.TenantDto>;
    /**
     *
     *
     * @param input
     */
    tenantCreateWithHttpInfo(input?: models.CreateTenantDto, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    tenantDeleteWithHttpInfo(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    tenantGetWithHttpInfo(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    tenantGetAllWithHttpInfo(input?: models.PagedResultRequestDto, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    tenantUpdateWithHttpInfo(input?: models.TenantDto, extraHttpRequestParams?: any): Observable<Response>;
}
