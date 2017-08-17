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
     * @param input
     */
    getCollegemates(input?: models.GetCollegematesInput, extraHttpRequestParams?: any): Observable<models.GetCollegematesOutput>;
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
     */
    getMyInstitutions(extraHttpRequestParams?: any): Observable<models.GetMyInstitutionsOutput>;
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
     * @param input
     */
    getCollegematesWithHttpInfo(input?: models.GetCollegematesInput, extraHttpRequestParams?: any): Observable<Response>;
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
     */
    getMyInstitutionsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
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
