import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskService/task.service'
import { Task } from '../../models/task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService:TaskService) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe((tasks : Task[]) => {
          this.tasks = tasks;
          //console.log(tasks);
        },
        err => {
          console.log(err);
          return false;
        });
  }

}
