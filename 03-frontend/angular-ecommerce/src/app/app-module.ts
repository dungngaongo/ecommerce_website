import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './components/product-list/product-list';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './services/product';

@NgModule({
  declarations: [
    App,
    ProductList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Product
  ],
  bootstrap: [App]
})
export class AppModule { }
