import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { TodayTaskListComponent } from './today-task-list.component';


@NgModule({
  declarations: [TodayTaskListComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TodayTaskListComponent }])
  ],
})
export class TodayTaskListModule { }
