import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Enumerable from 'linq';
import { MessageService } from 'primeng/api';
import { lastValueFrom, map } from 'rxjs';
import { Product } from 'src/libs/model';
import { Category } from 'src/libs/model/category';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product.dashboard.component.html',
  styleUrls: ['./product.dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDashboardComponent implements OnInit, OnDestroy {

  public categories: Product[] = [];
  public products: Product[] = [];

  public selectedCategory: any = null;

  public cart: Product[] = [];

  public showCart = false;

  constructor(route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService) {

    route.data
      .pipe(
        map((data: any) => {

          this.categories = data?.categories ?? [];

        })
      ).subscribe()
  }


  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }


  public async onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.products = await lastValueFrom(this.productService.getProductsByCategory(category?.name));

  }

  public onAddToCart(product: Product) {

    // hack limit
    product.limit = product.quantity;
    product.quantity = 1;

    const exist = Enumerable.from(this.cart)
      .firstOrDefault(x => x?._id === product?._id);

    this.messageService.add({ severity: 'success', summary: 'Add To Cart', detail: `'${product?.name}' added to cart!` });

    if (!!exist?._id) {

      this.cart = Enumerable.from(this.cart)
        .select(x => {
          if (product._id === x._id) {
            x.quantity += 1;
          }

          return x;
        }).toArray();

      return;
    }



    this.cart.push(product);
  }

  public onShowCart(show: boolean) {
    this.showCart = show;
  }

  public onRemoveInCart(productId: string) {

    this.cart = Enumerable.from(this.cart)
      .where(x => x._id !== productId)
      .toArray();

  }
}
