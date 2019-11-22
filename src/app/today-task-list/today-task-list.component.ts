import { Component, OnInit } from '@angular/core';
import { TodayTaskListService } from './today-task-list.service'

@Component({
  selector: 'app-today-task-list',
  templateUrl: './today-task-list.component.html',
  styleUrls: ['./today-task-list.component.scss'],
})
export class TodayTaskListComponent implements OnInit {

  header;
  tasks;

  constructor(private service: TodayTaskListService) {
    this.header = service.getHeader();
    this.tasks = service.getTasks();
   }

  ngOnInit() {}

}
