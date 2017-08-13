import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class TagApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    getTag(input?: models.GetTagInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    getTags(input?: models.GetTagsInput, extraHttpRequestParams?: any): Observable<models.GetTagsOutput>;
    /**
     *
     *
     * @param input
     */
    getTagWithHttpInfo(input?: models.GetTagInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getTagsWithHttpInfo(input?: models.GetTagsInput, extraHttpRequestParams?: any): Observable<Response>;
}
