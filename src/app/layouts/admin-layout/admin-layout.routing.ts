import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../add-musician/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../add-project/notifications.component';
import { ProjectComponent } from '../../project/project.component';
import { AddClientComponent } from '../../add-client/add-client.component';

export const AdminLayoutRoutes: Routes = [
   // { path: 'dashboard',      component: DashboardComponent },
   { path: 'table-list',     component: TableListComponent },
    { path: 'user-profile',   component: UserProfileComponent },
  {path: 'app-add-client', component: AddClientComponent},
    { path: 'notifications',  component: NotificationsComponent },//'ProductsToShow/:id'
    {path:'music-project/:id/:name',component:ProjectComponent}


];
