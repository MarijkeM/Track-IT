import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/taskService/task.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title: String;
  priority: String;
  estimatedTime:number;
  date:Date;
  year:number;
  month:number;
  day:number;

  constructor(private taskService: TaskService,
              private router: Router,) { }

  ngOnInit() {
  }

  onTaskSubmit(){
    this.date = new Date(this.year, this.month, this.day);

    const task = {
      title: this.title,
      priority: this.priority,
      estimatedTime: this.estimatedTime,
      dateDeadline:this.date
    }

    this.taskService.addTask(task);
    this.router.navigate(['/tasks']);
  }

}
