import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class DescriptionApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createExternalImageDescription(input?: models.CreateExternalImageDescriptionInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    createInternalImageDescription(input?: models.CreateInternalImageDescriptionInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    createTextDescription(input?: models.CreateTextDescriptionInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    createYoutubeDescription(input?: models.CreateYoutubeDescriptionInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    removeDescription(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateDescription(input?: models.UpdateDescriptionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateTextDescription(input?: models.UpdateTextDescriptionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createExternalImageDescriptionWithHttpInfo(input?: models.CreateExternalImageDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createInternalImageDescriptionWithHttpInfo(input?: models.CreateInternalImageDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createTextDescriptionWithHttpInfo(input?: models.CreateTextDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createYoutubeDescriptionWithHttpInfo(input?: models.CreateYoutubeDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeDescriptionWithHttpInfo(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateDescriptionWithHttpInfo(input?: models.UpdateDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateTextDescriptionWithHttpInfo(input?: models.UpdateTextDescriptionInput, extraHttpRequestParams?: any): Observable<Response>;
}
