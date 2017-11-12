export interface ExternalAuthenticateResultModel {
    accessToken?: string;
    encryptedAccessToken?: string;
    expireInSeconds?: number;
    waitingForActivation?: boolean;
}
