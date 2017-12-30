import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../models/task'
import {TaskService} from '../../services/taskService/task.service'

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task: Task;

    constructor(private taskService:TaskService) {
    }

    ngOnInit() {
    }

}
