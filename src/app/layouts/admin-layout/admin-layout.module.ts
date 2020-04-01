import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../add-musician/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NotificationsComponent } from '../../add-project/notifications.component';
import { ProjectComponent } from '../../project/project.component';
import { PhasesComponent } from '../../project/phases/phases.component';
import { TasksComponent } from '../../project/phases/tasks/tasks.component';
import { SessionsComponent } from '../../project/phases/tasks/sessions/sessions.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProjectTableComponent } from '../../table-list/project-table/project-table.component';
import { MusicianTableComponent } from '../../table-list/musician-table/musician-table.component';
import { DatePickerComponent } from '../../project/phases/tasks/create-session/date-picker/date-picker.component';
import { TimePickerComponent } from '../../project/phases/tasks/create-session/time-picker/time-picker.component';
import { CreateSessionComponent } from '../../project/phases/tasks/create-session/create-session.component';
import { CheckBoxModelComponent } from '../../project/phases/tasks/create-session/check-box-model/check-box-model.component';
import { AddClientComponent } from '../../add-client/add-client.component';
import { CheckboxClientComponent } from '../../add-project/checkbox-client/checkbox-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent,
    ProjectComponent,
    PhasesComponent,
TasksComponent,
SessionsComponent,
ProjectTableComponent,
MusicianTableComponent,
DatePickerComponent,
TimePickerComponent,
CreateSessionComponent,
CheckBoxModelComponent,
AddClientComponent,
CheckboxClientComponent
  ]
})

export class AdminLayoutModule {}
