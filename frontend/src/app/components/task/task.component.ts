import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../models/task'
import {TaskService} from '../../services/taskService/task.service'
import { Router } from '@angular/router';
import {TasksComponent} from '../tasks/tasks.component'

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task: Task;

    deadlineDate: Date;
    datum: any;

    weekday: String[] = ["Zo","Ma","Di","Wo","Do","Vr","Za"];

    constructor(private taskService: TaskService,
                private router:Router,
    private tasksComponent:TasksComponent) {
    }

    ngOnInit() {
        if (this.task.dateDeadline) {
            const d: Date = new Date(this.task.dateDeadline);
            this.datum =
                this.weekday[d.getDay()] + " "
                + d.getDate() +"/" +
                ((d.getMonth())+1) + "/" +
                d.getFullYear();
            this.deadlineDate = this.task.dateDeadline;
        }
    }

    onClickDelete(event){
        event.preventDefault();
        this.taskService.deleteTask(this.task._id);
       this.tasksComponent.getTasks();
    }


}
