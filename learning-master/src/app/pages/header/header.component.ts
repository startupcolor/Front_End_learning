import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';

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
    },
    {
      path: '/planner',
      title: 'Planner'
    },
    {
      path: '/cat-facts',
      title: 'Cat Facts'
    },
    {
      path: '/users',
      title: 'Users'
    }
  ];
}
