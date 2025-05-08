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

    <main class="ml-[270px] mt-[80px] min-h-[calc(100vh-80px)] p-4 bg-[#1e2027] text-white">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Reelko';
}
