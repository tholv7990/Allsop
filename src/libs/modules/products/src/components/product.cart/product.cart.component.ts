import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/libs/model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product.cart.component.html',
  styleUrls: ['./product.cart.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCartComponent implements OnInit {

  @Input() public product: Product = null;

  @Output() public add = new EventEmitter<Product>;

  constructor() { }

  ngOnInit(): void {
  }

  public onAddToCart() {
    this.add.emit(this.product);
  }
}
