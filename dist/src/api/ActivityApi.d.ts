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
    addImagesToActivity(input?: models.AddImagesToActivityInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    bookmarkActivity(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
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
    getActivityBookmarkingUsers(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityBookmarkingUsersOutput>;
    /**
     *
     * @param input
     */
    getActivityComments(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityCommentsOutput>;
    /**
     *
     * @param input
     */
    getActivityImages(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityImagesOutput>;
    /**
     *
     * @param input
     */
    getActivityParticipants(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityParticipantsOutput>;
    /**
     *
     * @param input
     */
    getActivityPreview(input?: models.GetActivityPreviewInput, extraHttpRequestParams?: any): Observable<models.GetActivityPreviewOutput>;
    /**
     *
     * @param input
     */
    getActivityRatings(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetActivityRatingsOutput>;
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
    getWorldActivities(input?: models.GetWorldActivitiesInput, extraHttpRequestParams?: any): Observable<models.GetWorldActivitiesOutput>;
    /**
     *
     * @param input
     */
    removeActivity(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    unbookmarkActivity(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
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
    addImagesToActivityWithHttpInfo(input?: models.AddImagesToActivityInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    bookmarkActivityWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
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
    getActivityBookmarkingUsersWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityCommentsWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityImagesWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityParticipantsWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityPreviewWithHttpInfo(input?: models.GetActivityPreviewInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getActivityRatingsWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
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
    getWorldActivitiesWithHttpInfo(input?: models.GetWorldActivitiesInput, extraHttpRequestParams?: any): Observable<Response>;
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
    unbookmarkActivityWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateActivityWithHttpInfo(input?: models.UpdateActivityInput, extraHttpRequestParams?: any): Observable<Response>;
}
