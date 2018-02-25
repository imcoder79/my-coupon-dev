import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoresComponent } from './stores/stores.component';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    CategoriesComponent,
    HomeComponent,
    HeaderComponent,
    StoresComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
