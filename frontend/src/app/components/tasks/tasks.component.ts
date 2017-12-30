import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskService/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }

}
