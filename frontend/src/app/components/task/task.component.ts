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

    deadlineDate: Date;
    datum: any;


    weekday: String[] = ["Zo","Ma","Di","Wo","Do","Vr","Za"];

    constructor(private taskService: TaskService) {
    }


    ngOnInit() {

        if (this.task.dateDeadline) {
            const d: Date = new Date(this.task.dateDeadline);
            console.log("task deadline: " + this.task.dateDeadline);
            console.log("new date: " + d.getUTCFullYear());
            this.datum =
                this.weekday[d.getDay()] + " "
                + d.getDate() +"/" +
                ((d.getMonth())+1) + "/" +
                d.getFullYear();
            this.deadlineDate = this.task.dateDeadline;
        }

    }


}
