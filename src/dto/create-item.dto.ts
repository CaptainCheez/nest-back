export class CreateItemDto {
	readonly id?: string;
	readonly title: string;
	readonly description?: string;
    readonly image?: string;
    readonly price: number;
    readonly categories: number[];
    readonly brand: string;
    readonly sex: string;
}