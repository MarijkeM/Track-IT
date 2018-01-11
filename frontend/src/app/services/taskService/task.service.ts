import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {AuthService} from '../authService/auth.service'
import {GlobalVariable} from '../global'
import {Task} from '../../models/task'

@Injectable()
export class TaskService {
    task: any;
    authToken: any;

    constructor(private authService: AuthService,
                private http: HttpClient) {
    }

    getTasks() {
        console.log("***taskService getTasks()");

        this.loadToken();
        const headers = this.getHeaders();

        var route = GlobalVariable.base_url + 'task/alleTaken';

        return this.http.get<any>(route, {headers});
    }

    getTasksToDo() {
        console.log("***taskService getTasksTodo()");

        this.loadToken();
        const headers = this.getHeaders();

        var route = GlobalVariable.base_url + 'task/alleTakenTodo';

        return this.http.get<any>(route, {headers});
    }

    getTasksDone() {
        console.log("***taskService getTasksDone()");

        this.loadToken();
        const headers = this.getHeaders();

        var route = GlobalVariable.base_url + 'task/alleTakenDone';

        return this.http.get<any>(route, {headers});
    }

    deleteTask(taskId) {
        console.log("deleteTask in task.service met taskId: " + taskId);

        this.loadToken()
        const headers = this.getHeaders();

        var route = GlobalVariable.base_url + "task/taakVerwijderen/" + taskId;

        return this.http.delete(route, {headers}).subscribe(data => {
            console.log(data);
        });
    }

    updateTask(taskId, task) {
        console.log("updateTask in taskService met taskId: " + taskId);
        console.log("en taak: " + JSON.stringify(task))

        this.loadToken()
        console.log("auth token" + this.authToken)
        const headers = this.getHeaders();

        var route = GlobalVariable.base_url + "task/taakWijzigen/" + taskId;

        return this.http.put<any>(route, task, {headers}).subscribe((data) => {
            console.log("data: " + JSON.stringify(data));
        }, (err) => {
            console.log("error bij taakwijzigen: " + JSON.stringify(err));
        });
    }

    getHeaders() {
        return new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');
    }

    loadToken() {
        this.authToken = this.authService.loadToken();
    }
}
