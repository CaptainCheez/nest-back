export class CreateItemDto {
    readonly image: string;
    readonly title: string;
    readonly price: string;
    readonly salePrice?: string;
    readonly photos: string[];
    readonly colors: string[];
    readonly sizes: string[];
    readonly categories: number[];
    readonly brandId: string;
    readonly for: string;
}