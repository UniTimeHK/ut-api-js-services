import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class UserApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     */
    getMyUser(extraHttpRequestParams?: any): Observable<models.GetMyUserOutput>;
    /**
     *
     * @param input
     */
    getUser(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<models.GetUserOutput>;
    /**
     *
     * @param input
     */
    getUsers(input?: models.GetUsersInput, extraHttpRequestParams?: any): Observable<models.GetUsersOutput>;
    /**
     *
     * @param input
     */
    updateMyUser(input?: models.UpdateMyUserInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateMyUserPassword(input?: models.UpdateMyUserPasswordInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     */
    getMyUserWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getUserWithHttpInfo(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getUsersWithHttpInfo(input?: models.GetUsersInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateMyUserWithHttpInfo(input?: models.UpdateMyUserInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateMyUserPasswordWithHttpInfo(input?: models.UpdateMyUserPasswordInput, extraHttpRequestParams?: any): Observable<Response>;
}
