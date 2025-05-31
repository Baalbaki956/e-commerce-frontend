import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { CartComponent } from './features/cart/cart.component';
import { AccountComponent } from './features/account/account.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "categories",
        component: CategoriesComponent
    },
    {
        path: "wishlist",
        component: WishlistComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "account",
        component: AccountComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    }
];
