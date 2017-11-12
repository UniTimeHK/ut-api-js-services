import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class FriendInvitationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    acceptFriendInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    cancelFriendInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    createFriendInvitation(input?: models.CreateFriendInvitationInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     */
    getMyPendingFriendInvitations(extraHttpRequestParams?: any): Observable<models.GetFriendInvitationsOutput>;
    /**
     *
     * @param input
     */
    ignoreFriendInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    rejectFriendInvitation(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    acceptFriendInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    cancelFriendInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createFriendInvitationWithHttpInfo(input?: models.CreateFriendInvitationInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getMyPendingFriendInvitationsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    ignoreFriendInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    rejectFriendInvitationWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
}
