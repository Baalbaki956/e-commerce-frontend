import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { OrdersComponent } from "./orders/orders.component";
import { WishlistComponent } from './wishlist/wishlist.component';
import { SecurityComponent } from "./security/security.component";

@Component({
  selector: 'app-account',
  imports: [CommonModule, ProfileComponent, OrdersComponent, WishlistComponent, SecurityComponent],
  templateUrl: 'account.component.html',
  styles: ``
})
export class AccountComponent {
  activeTab: string = 'personal_info';
  
  selectTab(tabName: string) {
    this.activeTab = tabName;
  }
}
