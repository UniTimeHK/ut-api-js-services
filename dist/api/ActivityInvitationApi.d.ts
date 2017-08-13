import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ActivityInvitationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    acceptActivityInvitation(input?: models.AcceptActivityInvitationInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    cancelActivityInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    createActivityInvitations(input?: models.CreateActivityInvitationsInput, extraHttpRequestParams?: any): Observable<models.CreateActivityInvitationsOutput>;
    /**
     *
     * @param input
     */
    getActvityInvitations(input?: models.GetActvityInvitationsInput, extraHttpRequestParams?: any): Observable<models.GetActivityInvitationsOutput>;
    /**
     *
     */
    getMyPendingActivityInvitations(extraHttpRequestParams?: any): Observable<models.GetActivityInvitationsOutput>;
    /**
     *
     * @param input
     */
    ignoreActivityInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    rejectActivityInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    acceptActivityInvitationWithHttpInfo(input?: models.AcceptActivityInvitationInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    cancelActivityInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createActivityInvitationsWithHttpInfo(input?: models.CreateActivityInvitationsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActvityInvitationsWithHttpInfo(input?: models.GetActvityInvitationsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getMyPendingActivityInvitationsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    ignoreActivityInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    rejectActivityInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
}
