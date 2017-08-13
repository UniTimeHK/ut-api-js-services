import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class TokenAuthApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param model
     */
    apiTokenAuthAuthenticate(model?: models.AuthenticateModel, extraHttpRequestParams?: any): Observable<models.AuthenticateResultModel>;
    /**
     *
     * @param model
     */
    apiTokenAuthExternalAuthenticate(model?: models.ExternalAuthenticateModel, extraHttpRequestParams?: any): Observable<models.ExternalAuthenticateResultModel>;
    /**
     *
     */
    apiTokenAuthGetExternalAuthenticationProvidersGet(extraHttpRequestParams?: any): Observable<Array<models.ExternalLoginProviderInfoModel>>;
    /**
     *
     *
     * @param model
     */
    apiTokenAuthAuthenticateWithHttpInfo(model?: models.AuthenticateModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param model
     */
    apiTokenAuthExternalAuthenticateWithHttpInfo(model?: models.ExternalAuthenticateModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    apiTokenAuthGetExternalAuthenticationProvidersGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
