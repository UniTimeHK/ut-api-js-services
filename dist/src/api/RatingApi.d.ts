import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class RatingApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createRating(input?: models.CreateRatingInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     */
    getMyRatings(extraHttpRequestParams?: any): Observable<models.GetRatingsOutput>;
    /**
     *
     * @param input
     */
    removeRating(input?: models.RatingInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createRatingWithHttpInfo(input?: models.CreateRatingInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getMyRatingsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeRatingWithHttpInfo(input?: models.RatingInput, extraHttpRequestParams?: any): Observable<Response>;
}
