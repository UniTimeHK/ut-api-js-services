import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ImageApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     */
    getMyImages(extraHttpRequestParams?: any): Observable<models.GetMyImagesOutput>;
    /**
     *
     * @param input
     */
    removeImages(input?: models.RemoveImagesInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     */
    getMyImagesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeImagesWithHttpInfo(input?: models.RemoveImagesInput, extraHttpRequestParams?: any): Observable<Response>;
}
