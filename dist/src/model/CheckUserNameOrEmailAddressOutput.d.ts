export interface CheckUserNameOrEmailAddressOutput {
    isUserNameOrEmailAddressHasTaken?: boolean;
    isEmailConfirmed?: boolean;
    userId?: number;
}
