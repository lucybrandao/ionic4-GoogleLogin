import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodayTaskListService {

  constructor() { }

  getHeader() {
    return 'Para Hoje';
  }

  getTasks() {
    return ['Estudar Quasar', 'Criar mockups', 'Resgistrar spends', 'Reunião com cliente', 'Criar telas'];
  }
}
