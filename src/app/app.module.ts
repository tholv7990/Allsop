import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

const app_routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../libs/modules/products').then(m => m.ProductsModule),
    data: { title: 'Product', icon: 'fa-home' }
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes),
    BrowserAnimationsModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
