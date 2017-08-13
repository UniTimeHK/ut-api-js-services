import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ActivityApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createActivity(input?: models.CreateActivityInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     * @param input
     */
    createActivityFromActivityTemplate(input?: models.CreateActivityFromActivityTemplateInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     * @param input
     */
    getActivities(input?: models.GetActivitiesInput, extraHttpRequestParams?: any): Observable<models.GetActivitiesOutput>;
    /**
     *
     * @param input
     */
    getActivity(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityOutput>;
    /**
     *
     * @param input
     */
    getMyActivities(input?: models.GetMyActivitiesInput, extraHttpRequestParams?: any): Observable<models.GetMyActivitiesOutput>;
    /**
     *
     * @param input
     */
    getMyActivityIds(input?: models.GetMyActivityIdsInput, extraHttpRequestParams?: any): Observable<models.GetMyActivityIdsOutput>;
    /**
     *
     * @param input
     */
    removeActivity(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateActivity(input?: models.UpdateActivityInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createActivityWithHttpInfo(input?: models.CreateActivityInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createActivityFromActivityTemplateWithHttpInfo(input?: models.CreateActivityFromActivityTemplateInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivitiesWithHttpInfo(input?: models.GetActivitiesInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getMyActivitiesWithHttpInfo(input?: models.GetMyActivitiesInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getMyActivityIdsWithHttpInfo(input?: models.GetMyActivityIdsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeActivityWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateActivityWithHttpInfo(input?: models.UpdateActivityInput, extraHttpRequestParams?: any): Observable<Response>;
}
