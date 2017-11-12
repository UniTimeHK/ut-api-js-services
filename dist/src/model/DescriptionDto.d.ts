export interface DescriptionDto {
    type?: DescriptionDto.TypeEnum;
    content?: string;
    htmlClasses?: string;
    priority?: number;
    id?: number;
}
export declare namespace DescriptionDto {
    enum TypeEnum {
        NUMBER_0,
        NUMBER_1,
        NUMBER_2,
        NUMBER_3,
    }
}
