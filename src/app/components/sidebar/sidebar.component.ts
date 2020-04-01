import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/table-list', title: 'Main',  icon:'design_bullet-list-67', class: '' },
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Add New Project',  icon:'media-2_note-03', class: '' },
    { path: '/app-add-client', title: 'Add New Client',  icon:'users_single-02', class: '' },
    { path: '/user-profile', title: 'Add New Musician',  icon:'users_single-02', class: '' },
    //{path:'/add-new-projects',title:'Add New Project',icon:'media-2_note-03',class:''},
 
    //{ path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
