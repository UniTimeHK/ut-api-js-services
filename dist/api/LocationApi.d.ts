import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class LocationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createLocation(input?: models.CreateLocationInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     * @param input
     */
    getLocations(input?: models.GetLocationsInput, extraHttpRequestParams?: any): Observable<models.GetLocationsOutput>;
    /**
     *
     * @param input
     */
    getPlaces(input?: models.GetPlacesInput, extraHttpRequestParams?: any): Observable<models.GetPlacesOutput>;
    /**
     *
     *
     * @param input
     */
    createLocationWithHttpInfo(input?: models.CreateLocationInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getLocationsWithHttpInfo(input?: models.GetLocationsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getPlacesWithHttpInfo(input?: models.GetPlacesInput, extraHttpRequestParams?: any): Observable<Response>;
}
