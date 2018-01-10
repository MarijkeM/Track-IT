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

        const headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        return this.http.get<any>(GlobalVariable.base_url + 'task/alleTaken', {headers});
    }

    deleteTask(taskId){
        console.log("deleteTask in task.service met taskId: " + taskId);
        this.loadToken()
        console.log("authtoken: " + this.authToken);

        const headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        var route = "task/taakVerwijderen/"+taskId;

        //console.log(this.http.delete(GlobalVariable.base_url + route, {headers}))
        return this.http.delete(GlobalVariable.base_url + route, {headers}).subscribe(data =>{
            console.log(data);
        });
    }

    loadToken(){
        this.authToken = this.authService.loadToken();
    }
}
