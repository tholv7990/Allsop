import { Category } from "./category";
import { Product, ProductCategory } from "./product";

export const products: Product[] = [
    {
        _id: '1',
        name: 'Chicken Fillets, 6 x 100g',
        description: '6 x 100g',
        price: 4.5,
        quantity: 12,
        category: ProductCategory.MeatPoultry
    },
    {
        _id: '2',
        name: 'Sirloin Steaks',
        description: '4 x 6-8oz',
        price: 45.7,
        quantity: 6,
        category: ProductCategory.MeatPoultry
    },
    {
        _id: '3',
        name: 'Whole Free-Range Turkey',
        description: '1 x 16-18lbs',
        price: 43.2,
        quantity: 8,
        category: ProductCategory.MeatPoultry
    },
    {
        _id: '4',
        name: 'Granny Smith Apples',
        description: '4 x 16 each',
        price: 3.75,
        quantity: 0,
        category: ProductCategory.MeatPoultry
    },
    {
        _id: '5',
        name: 'Loose Carrots',
        description: '4 x 20 each',
        price: 3.75,
        quantity: 0,
        category: ProductCategory.FruitVegetables
    },
    {
        _id: '5',
        name: 'Loose Carrots',
        description: '4 x 20 each',
        price: 2.67,
        quantity: 2,
        category: ProductCategory.FruitVegetables
    },
    {
        _id: '6',
        name: 'Mandarin Oranges',
        description: '6 x 10 x 12',
        price: 12.23,
        quantity: 8,
        category: ProductCategory.FruitVegetables
    },
    {
        _id: '7',
        name: 'Cauliflower Florets',
        description: '10 x 500g',
        price: 5,
        quantity: 5,
        category: ProductCategory.FruitVegetables
    },
    {
        _id: '8',
        name: 'Coca-Cola',
        description: '2 x 2L',
        price: 8.3,
        quantity: 6,
        category: ProductCategory.Drinks
    },
    {
        _id: '9',
        name: 'Still Mineral Water',
        description: '6 x 24 x 500ml',
        price: 21.75,
        quantity: 9,
        category: ProductCategory.Drinks
    },
    {
        _id: '10',
        name: 'Sparkling Mineral Water',
        description: '6 x 24 x 500ml',
        price: 25.83,
        quantity: 16,
        category: ProductCategory.Drinks
    },
    {
        _id: '11',
        name: 'Mars Bar',
        description: '6 x 24 x 50g',
        price: 42.82,
        quantity: 4,
        category: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '12',
        name: 'Mars Bar',
        description: '6 x 24 x 50g',
        price: 42.82,
        quantity: 4,
        category: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '12',
        name: 'Peppermint Chewing Gum',
        description: ' 6 x 50 x 30g',
        price: 35.7,
        quantity: 6,
        category: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '13',
        name: 'Strawberry Cheesecake',
        description: '4 x 12 portions',
        price: 8.52,
        quantity: 0,
        category: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '14',
        name: 'Vanilla Ice Cream',
        description: '6 x 4L',
        price: 3.8,
        quantity: 2,
        category: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '15',
        name: 'Plain Flour',
        description: '10 x 1kg',
        price: 6.21,
        quantity: 4,
        category: ProductCategory.BakingCookingIngredients
    },
    {
        _id: '16',
        name: 'Icing Sugar',
        description: '12 x 500g',
        price: 9.38,
        quantity: 6,
        category: ProductCategory.BakingCookingIngredients
    },
    {
        _id: '17',
        name: 'Free-Range Eggs',
        description: '10 x 12 each',
        price: 9.52,
        quantity: 9,
        category: ProductCategory.BakingCookingIngredients
    },
    {
        _id: '18',
        name: 'Caster Sugar',
        description: '16 x 750g',
        price: 12.76,
        quantity: 13,
        category: ProductCategory.BakingCookingIngredients
    },
    {
        _id: '19',
        name: 'Kitchen Roll',
        description: '100 x 300 sheets',
        price: 43.92,
        quantity: 19,
        category: ProductCategory.MiscellaneousItems
    },
    {
        _id: '20',
        name: 'Paper Plates',
        description: '10 x 200 each',
        price: 16.19,
        quantity: 7,
        category: ProductCategory.MiscellaneousItems
    }
];

export const categories: Category[] = [
    {
        _id: '1',
        name: ProductCategory.MeatPoultry
    },
    {
        _id: '2',
        name: ProductCategory.FruitVegetables
    },
    {
        _id: '3',
        name: ProductCategory.Drinks
    },
    {
        _id: '4',
        name: ProductCategory.ConfectionaryDesserts
    },
    {
        _id: '5',
        name: ProductCategory.BakingCookingIngredients
    },
    {
        _id: '6',
        name: ProductCategory.MiscellaneousItems
    }
]