import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class NotificationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * @param input
     */
    getMyNotifications(input?: models.GetMyNotificationsInput, extraHttpRequestParams?: any): Observable<models.GetMyNotificationsOutput>;
    /**
     *
     */
    readAllNotifications(extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param input
     */
    readNotification(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param input
     */
    getMyNotificationsWithHttpInfo(input?: models.GetMyNotificationsInput, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     */
    readAllNotificationsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param input
     */
    readNotificationWithHttpInfo(input?: models.EntityDtoInt64, extraHttpRequestParams?: any): Observable<Response>;
}
