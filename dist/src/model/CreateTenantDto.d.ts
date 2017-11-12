export interface CreateTenantDto {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    connectionString?: string;
    isActive?: boolean;
}
