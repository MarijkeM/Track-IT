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
        console.log("***task.service.ts getTasks()");
        this.authToken = this.authService.loadToken();

        const headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        return this.http.get<any>(GlobalVariable.base_url + 'task/alleTaken', {headers});
    }
}
