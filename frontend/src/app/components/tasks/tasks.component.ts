import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/taskService/task.service'
import {Task} from '../../models/task'
import {Router} from '@angular/router';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService,
                private router: Router,) {
    }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks().subscribe((tasks: Task[]) => {
                this.tasks = tasks;
                console.log(tasks);
                this.tasks = this.tasks.sort(this.sorterenOpPrioriteit);
            },
            err => {
                console.log(err);
                return false;
            });

    }

    sorterenOpPrioriteit(a, b) {
        if (a.priority > b.priority)
            return -1;
        if (a.priority < b.priority)
            return 1;
        return 0;
    }

    onClickAddTask(){
        this.router.navigate(['/addTask'])
    }

    onClickTodo() {
        this.taskService.getTasksToDo().subscribe((tasks: Task[]) => {
                this.tasks = tasks;
                console.log(tasks);
                this.tasks = this.tasks.sort(this.sorterenOpPrioriteit);
            },
            err => {
                console.log(err);
                return false;
            });
    }

    onClickDone() {
        this.taskService.getTasksDone().subscribe((tasks: Task[]) => {
                this.tasks = tasks;
                console.log(tasks);
            },
            err => {
                console.log(err);
                return false;
            });
    }

}
