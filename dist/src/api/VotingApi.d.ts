import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class VotingApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createSuggestions(input?: models.CreateSuggestionsInput, extraHttpRequestParams?: any): Observable<models.CreateSuggestionsOutput>;
    /**
     *
     * @param input
     */
    createVoting(input?: models.CreateVotingInput, extraHttpRequestParams?: any): Observable<models.CreateVotingOutput>;
    /**
     *
     * @param input
     */
    getChatRoomVotings(input?: models.GetChatRoomVotingsInput, extraHttpRequestParams?: any): Observable<models.GetChatRoomVotingsOutput>;
    /**
     *
     * @param input
     */
    getVoting(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<models.GetVotingOutput>;
    /**
     *
     * @param input
     */
    removeSuggestions(input?: models.RemoveSuggestionsInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    removeVoting(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    vote(input?: models.VoteInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createSuggestionsWithHttpInfo(input?: models.CreateSuggestionsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createVotingWithHttpInfo(input?: models.CreateVotingInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getChatRoomVotingsWithHttpInfo(input?: models.GetChatRoomVotingsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getVotingWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeSuggestionsWithHttpInfo(input?: models.RemoveSuggestionsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    removeVotingWithHttpInfo(input?: models.EntityDtoGuid, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    voteWithHttpInfo(input?: models.VoteInput, extraHttpRequestParams?: any): Observable<Response>;
}
