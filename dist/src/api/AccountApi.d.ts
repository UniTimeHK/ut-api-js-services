import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class AccountApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    checkUserNameOrEmailAddress(input?: models.UserNameOrEmailAddressInput, extraHttpRequestParams?: any): Observable<models.CheckUserNameOrEmailAddressOutput>;
    /**
     *
     * @param input
     */
    forgotPassword(input?: models.ForgotPasswordInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    isTenantAvailable(input?: models.IsTenantAvailableInput, extraHttpRequestParams?: any): Observable<models.IsTenantAvailableOutput>;
    /**
     *
     * @param input
     */
    resendValidationEmail(input?: models.UserIdInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    resetPassword(input?: models.ResetPasswordInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    signUp(input?: models.SignUpInput, extraHttpRequestParams?: any): Observable<models.SignUpOutput>;
    /**
     *
     * @param input
     */
    signUpAsOrganisation(input?: models.SignUpAsOrganisationInput, extraHttpRequestParams?: any): Observable<models.SignUpOutput>;
    /**
     *
     * @param input
     */
    validateEmail(input?: models.ValidateEmailInput, extraHttpRequestParams?: any): Observable<models.ValidateEmailOutput>;
    /**
     *
     *
     * @param input
     */
    checkUserNameOrEmailAddressWithHttpInfo(input?: models.UserNameOrEmailAddressInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    forgotPasswordWithHttpInfo(input?: models.ForgotPasswordInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    isTenantAvailableWithHttpInfo(input?: models.IsTenantAvailableInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    resendValidationEmailWithHttpInfo(input?: models.UserIdInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    resetPasswordWithHttpInfo(input?: models.ResetPasswordInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    signUpWithHttpInfo(input?: models.SignUpInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    signUpAsOrganisationWithHttpInfo(input?: models.SignUpAsOrganisationInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    validateEmailWithHttpInfo(input?: models.ValidateEmailInput, extraHttpRequestParams?: any): Observable<Response>;
}
