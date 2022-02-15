import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.codel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      path: '/counter',
      title: 'Simple Counter'
    },
    {
      path: '/login',
      title: 'Login'
    }
  ];
}
