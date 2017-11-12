import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class EmailTemplateApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createEmailTemplate(input?: models.CreateEmailTemplateInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt32>;
    /**
     *
     */
    getEmailTemplates(extraHttpRequestParams?: any): Observable<models.GetEmailTemplatesOutput>;
    /**
     *
     * @param input
     */
    removeEmailTemplate(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateEmailTemplate(input?: models.UpdateEmailTemplateInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createEmailTemplateWithHttpInfo(input?: models.CreateEmailTemplateInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getEmailTemplatesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeEmailTemplateWithHttpInfo(input?: models.EntityDtoInt32, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateEmailTemplateWithHttpInfo(input?: models.UpdateEmailTemplateInput, extraHttpRequestParams?: any): Observable<Response>;
}
