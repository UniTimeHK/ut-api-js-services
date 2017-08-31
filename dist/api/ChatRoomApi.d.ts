import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ChatRoomApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    createChatRoom(input?: models.CreateChatRoomInput, extraHttpRequestParams?: any): Observable<models.EntityDtoGuid>;
    /**
     *
     */
    getMyChatRooms(extraHttpRequestParams?: any): Observable<models.GetMyChatRoomsOutput>;
    /**
     *
     * @param input
     */
    quitChatRoom(input?: models.QuitChatRoomInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    updateChatRoom(input?: models.UpdateChatRoomInput, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    createChatRoomWithHttpInfo(input?: models.CreateChatRoomInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    getMyChatRoomsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    quitChatRoomWithHttpInfo(input?: models.QuitChatRoomInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    updateChatRoomWithHttpInfo(input?: models.UpdateChatRoomInput, extraHttpRequestParams?: any): Observable<Response>;
}
