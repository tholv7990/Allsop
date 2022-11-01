import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import Enumerable from 'linq';
import { DiscountResult, Product } from 'src/libs/model';
import { ProductUtility } from 'src/libs/utils/product.utility';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping.cart.component.html',
  styleUrls: ['./shopping.cart.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnChanges {

  @Input() public products: Product[];
  @Output() public remove = new EventEmitter<string>();
  @Output() public close = new EventEmitter<boolean>();

  public formArray: FormArray;
  public couponForm = new FormControl(null);

  public showError = false;
  public applyPromoCode = false;

  constructor(private builder: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products) {

      this.formArray = this.builder.array([]);

      Enumerable.from(this.products)
        .forEach(p => {

          const productForm = this.builder.group({
            _id: ['', []],
            name: ['', []],
            quantity: [1, []],
            price: [0, []],
            description: ['', []],
            category: ['', []],
            limit: [0, []]
          });

          productForm.patchValue(p);

          this.formArray.push(productForm);

        })

    }


  }

  ngOnInit(): void {
  }

  public get discount(): DiscountResult {

    const cart = Enumerable.from(this.formArray.controls)
      .select(x => x.value).toArray();

    const applyPromoCode = this.couponForm.value?.toUpperCase() === '20OFFPROMO';

    return ProductUtility.getDiscounts(cart, applyPromoCode);
  }

  public onApplyCoupon() {

    const value = this.couponForm.value;

    this.showError = !!value && value?.toUpperCase() !== '20OFFPROMO';
  }

  public getItemTotal(product: Product): number {

    return product?.price * product?.quantity;
  }

}
