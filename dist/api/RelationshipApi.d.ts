import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class RelationshipApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    getFriends(input?: models.TargetUserInput, extraHttpRequestParams?: any): Observable<models.GetFriendsOutput>;
    /**
     *
     * @param input
     */
    unfriend(input?: models.TargetUserInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    getFriendsWithHttpInfo(input?: models.TargetUserInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    unfriendWithHttpInfo(input?: models.TargetUserInput, extraHttpRequestParams?: any): Observable<Response>;
}
