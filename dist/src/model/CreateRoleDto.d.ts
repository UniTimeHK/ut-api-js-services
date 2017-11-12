export interface CreateRoleDto {
    name: string;
    displayName: string;
    normalizedName?: string;
    description?: string;
    isStatic?: boolean;
    permissions?: Array<string>;
}
