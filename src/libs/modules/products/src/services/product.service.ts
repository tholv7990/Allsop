import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categories, Product, products } from 'src/libs/model';
import { Category } from 'src/libs/model/category';
import Enumerable from 'linq'

@Injectable()
export class ProductService {

  constructor() { }

  public getCategories(): Observable<Category[]> {

    // call api to get categories

    return of(Enumerable.from(categories)
      .orderBy(x => x?.name)
      .toArray());
  }

  public getProductsByCategory(categoryName: string): Observable<Product[]> {

    if (!categoryName)
      return of([]);


    const categoryProducts = Enumerable.from(products)
      .where(x => x?.category === categoryName)
      .orderBy(x => x.name)
      .toArray()

    return of(categoryProducts);
  }
}
