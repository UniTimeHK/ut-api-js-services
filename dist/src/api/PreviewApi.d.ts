import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PreviewApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    getActivityPreview(input?: models.GetActivityPreviewInput, extraHttpRequestParams?: any): Observable<models.GetActivityPreviewOutput>;
    /**
     *
     *
     * @param input
     */
    getActivityPreviewWithHttpInfo(input?: models.GetActivityPreviewInput, extraHttpRequestParams?: any): Observable<Response>;
}
