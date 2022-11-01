import Enumerable from "linq";
import { DiscountEntity, DiscountResult, Product, ProductCategory } from "../model";
import { Decimal } from 'decimal.js';

export class ProductUtility {

    public static getDiscounts(products: Product[], applyPromoCode = false): DiscountResult {

        const drinkDiscount: DiscountEntity = {
            quantity: 0,
            total: 0,
            discount: 0
        }

        const bakingDiscount: DiscountEntity = {
            quantity: 0,
            total: 0,
            discount: 0
        }

        const promoDiscount: DiscountEntity = {
            quantity: 0,
            total: 0,
            discount: 0
        }

        Enumerable.from(products)
            .forEach(p => {

                const itemTotal = new Decimal(p.quantity * p.price).toDP(2).toNumber();

                if (p.category === ProductCategory.Drinks) {
                    drinkDiscount.quantity += p.quantity;
                    drinkDiscount.total += itemTotal;
                }

                if (p.category === ProductCategory.BakingCookingIngredients) {
                    bakingDiscount.quantity += p.quantity;
                    bakingDiscount.total += itemTotal;
                }

                promoDiscount.total += itemTotal;

            });

        if (drinkDiscount.quantity > 10 || drinkDiscount.quantity === 10) {
            drinkDiscount.discount = new Decimal(drinkDiscount.total / 10).toDP(2).toNumber();
        }

        if (bakingDiscount.total > 50 || bakingDiscount.total === 50) {
            bakingDiscount.discount = 5
        }

        if (applyPromoCode && (promoDiscount.total > 100 || promoDiscount.total === 100)) {
            promoDiscount.discount = 20;
        }

        const discount = drinkDiscount?.discount + bakingDiscount?.discount + promoDiscount?.discount;
        const subTotal = promoDiscount.total;
        const total = promoDiscount.total - discount;

        return {
            drinks: drinkDiscount,
            baking: bakingDiscount,
            promo: promoDiscount,
            discount: discount,
            total: total,
            subTotal: subTotal
        }
    }
}