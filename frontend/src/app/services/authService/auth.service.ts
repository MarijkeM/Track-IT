import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'; //map operator om met observables te werken
import {tokenNotExpired} from 'angular2-jwt';
import {GlobalVariable} from '../globalUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model'


@Injectable()
export class AuthService {
    authToken: any;
    user: User;


    constructor(private http: HttpClient) {}

    registerUser(user) {
        //console.log("register user");
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.http.post<any>(GlobalVariable.base_url + 'user/register',
            user,
            {headers});

        /*
        //die user/registreren slaagt op routes-->user.js dat is de user en daarin
        //zit een post methode registreren en dat is dat tweede deel
        //hier zit dus de verbintenis met de backend
        */
    }

    authenticateUser(user) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        this.user = user;

        try{
            return this.http.post<any>(GlobalVariable.base_url + 'user/authenticate',
                user,
                {headers});
        }catch (err){
            return err;
        }
    }

    getProfile() {
        console.log("***auth.service getProfile()");
        this.loadToken();
        let headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        return this.http.get<any>(GlobalVariable.base_url + 'user/profile',
            {headers});
    }

    setUser(user){
        this.user = user;
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        return this.authToken = token;
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

    loggedInAs(role) {
        if (tokenNotExpired('id_token')) {
            console.log("auth.service, logged in as, gebruiker is: " + JSON.stringify(this.user))
            if (this.user) {
                if(this.user.role == role){
                    return true;
                }
            }
        }
        return false;
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log("user:" + JSON.stringify(this.user))
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    getAllUsers() {
        console.log("***auth.service getAllUsers()");
        this.loadToken();
        let headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');


        return this.http.get<any>(GlobalVariable.base_url + 'user/getAllUsers',
            {headers});
    }

    modifyUser(user) {
        console.log(user);
        this.loadToken();

        let headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        return this.http.put<any>(GlobalVariable.base_url + 'user/modifyUser/' + user._id,
            user,
            {headers});
    }

    deleteUser(userId) {
        this.loadToken();

        let headers = new HttpHeaders()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');

        return this.http.delete<any>(GlobalVariable.base_url + 'user/cancelUser/' + userId,
            {headers});
    }
}
