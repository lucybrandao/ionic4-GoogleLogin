import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'today-task-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../today-task-list/today-task-list.module').then(module => module.TodayTaskListModule)
          }
        ]
      },
      {
        path: 'week-task-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../week-task-list/week-task-list.module').then(module => module.WeekTaskListModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/today-task-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/today-task-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
