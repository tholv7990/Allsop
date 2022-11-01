import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent, ProductDashboardComponent, ShoppingCartComponent } from './components';
import { ProductService } from './services';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupAtPipe } from './pipes';
import { DialogModule } from 'primeng/dialog';

const routes = [
  {
    path: '',
    component: ProductDashboardComponent,
    data: { title: 'Products' },
    resolve: {
      categories: () => {
        const service = inject(ProductService);

        return service.getCategories();
      }
    }
  }
] as Routes;

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductCartComponent,
    ShoppingCartComponent,
    FormGroupAtPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ToastModule,
    DialogModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
