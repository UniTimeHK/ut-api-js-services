import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ChatRoomMessageApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createInternalImageChatRoomMessage(input?: models.CreateInternalImageChatRoomMessageInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    createTextChatRoomMessage(input?: models.CreateTextChatRoomMessageInput, extraHttpRequestParams?: any): Observable<models.EntityDtoInt64>;
    /**
     *
     * @param input
     */
    getChatRoomMessages(input?: models.GetChatRoomMessagesInput, extraHttpRequestParams?: any): Observable<models.GetChatRoomMessagesOutput>;
    /**
     *
     *
     * @param input
     */
    createInternalImageChatRoomMessageWithHttpInfo(input?: models.CreateInternalImageChatRoomMessageInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    createTextChatRoomMessageWithHttpInfo(input?: models.CreateTextChatRoomMessageInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    getChatRoomMessagesWithHttpInfo(input?: models.GetChatRoomMessagesInput, extraHttpRequestParams?: any): Observable<Response>;
}
