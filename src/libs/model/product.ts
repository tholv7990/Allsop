
export enum ProductCategory {
    MeatPoultry = 'Meat & Poultry ',
    FruitVegetables = 'Fruit & Vegetables',
    Drinks = 'Drinks',
    ConfectionaryDesserts = 'Confectionary & Desserts',
    BakingCookingIngredients = 'Baking/Cooking Ingredients',
    MiscellaneousItems = 'Miscellaneous Items'
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    category: ProductCategory;

    limit?: number;
}

export interface DiscountEntity {
    quantity: number;
    total: number;
    discount: number;
}

export interface DiscountResult {
    drinks: DiscountEntity;
    baking: DiscountEntity;
    total: DiscountEntity;
}

