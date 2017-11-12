import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class InstitutionApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    addMyInstitution(input?: models.AddMyInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    createInstitution(input?: models.CreateInstitutionInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     */
    getInstitutions(extraHttpRequestParams?: any): Observable<models.GetInstitutionsOutput>;
    /**
     *
     * @param input
     */
    getMajors(input?: models.GetMajorsInput, extraHttpRequestParams?: any): Observable<models.GetMajorsOutput>;
    /**
     *
     * @param input
     */
    getMyCollegemates(input?: models.GetMyCollegematesInput, extraHttpRequestParams?: any): Observable<models.GetMyCollegematesOutput>;
    /**
     *
     * @param input
     */
    getOrganisations(input?: models.GetOrganisationsInput, extraHttpRequestParams?: any): Observable<models.GetOrganisationsOutput>;
    /**
     *
     * @param input
     */
    getUserInstitutions(input?: models.GetUserInstitutionsInput, extraHttpRequestParams?: any): Observable<models.GetUserInstitutionsOutput>;
    /**
     *
     * @param input
     */
    removeInstitution(input?: models.RemoveInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    removeMyInstitution(input?: models.RemoveMyInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateInstitution(input?: models.UpdateInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateMyInstitution(input?: models.UpdateMyInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    validateMyInstitution(input?: models.ValidateMyInstitutionInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    addMyInstitutionWithHttpInfo(input?: models.AddMyInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createInstitutionWithHttpInfo(input?: models.CreateInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getInstitutionsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getMajorsWithHttpInfo(input?: models.GetMajorsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getMyCollegematesWithHttpInfo(input?: models.GetMyCollegematesInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getOrganisationsWithHttpInfo(input?: models.GetOrganisationsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getUserInstitutionsWithHttpInfo(input?: models.GetUserInstitutionsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeInstitutionWithHttpInfo(input?: models.RemoveInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeMyInstitutionWithHttpInfo(input?: models.RemoveMyInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateInstitutionWithHttpInfo(input?: models.UpdateInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateMyInstitutionWithHttpInfo(input?: models.UpdateMyInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    validateMyInstitutionWithHttpInfo(input?: models.ValidateMyInstitutionInput, extraHttpRequestParams?: any): Observable<Response>;
}
