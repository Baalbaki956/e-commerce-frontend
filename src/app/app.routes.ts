import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { CartComponent } from './features/cart/cart.component';
import { AccountComponent } from './features/account/account.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ElectronicsComponent } from './features/electronics/electronics.component';
import { AccessoriesComponent } from './features/accessories/accessories.component';
import { ClothingComponent } from './features/clothing/clothing.component';
import { HomelivingComponent } from './features/homeliving/homeliving.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "all",
        component: ProductsComponent
    },
    {
        path: "electronics",
        component: ElectronicsComponent
    },
    {
        path: "accessories",
        component: AccessoriesComponent
    },
    {
        path: "clothing",
        component: ClothingComponent
    },
    {
        path: "homeliving",
        component: HomelivingComponent
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
        path: "cart/checkout",
        component: SettingsComponent
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
