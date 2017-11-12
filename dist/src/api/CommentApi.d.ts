import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class CommentApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createInternalImageComment(input?: models.CreateInternalImageCommentInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     * @param input
     */
    createTextComment(input?: models.CreateTextCommentInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     *
     * @param input
     */
    createInternalImageCommentWithHttpInfo(input?: models.CreateInternalImageCommentInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createTextCommentWithHttpInfo(input?: models.CreateTextCommentInput, extraHttpRequestParams?: any): Observable<Response>;
}
