import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <app-header />
    <app-sidebar />

    <main class="fixed left-[255px] top-[73px] w-[calc(100vw-250px)] h-[calc(100vh-73px)] overflow-auto overflow-x-hidden ml-[1px] bg-gray-50">
      <router-outlet />
    </main>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'Reelko';
}
