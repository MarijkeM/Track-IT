webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n    <div class=\"container\">\r\n        <flash-messages></flash-messages>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_task_task_component__ = __webpack_require__("../../../../../src/app/components/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_stopwatch_stopwatch_component__ = __webpack_require__("../../../../../src/app/components/stopwatch/stopwatch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_breathing_breathing_component__ = __webpack_require__("../../../../../src/app/components/breathing/breathing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_thoughts_thoughts_component__ = __webpack_require__("../../../../../src/app/components/thoughts/thoughts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_challenge_thought_challenge_thought_component__ = __webpack_require__("../../../../../src/app/components/challenge-thought/challenge-thought.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_good_events_good_events_component__ = __webpack_require__("../../../../../src/app/components/good-events/good-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_validateService_validate_service__ = __webpack_require__("../../../../../src/app/services/validateService/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_taskService_task_service__ = __webpack_require__("../../../../../src/app/services/taskService/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_timer_timer_component__ = __webpack_require__("../../../../../src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_add_task_add_task_component__ = __webpack_require__("../../../../../src/app/components/add-task/add-task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profiel', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'breathing', component: __WEBPACK_IMPORTED_MODULE_16__components_breathing_breathing_component__["a" /* BreathingComponent */] },
    { path: 'challenge-thought', component: __WEBPACK_IMPORTED_MODULE_18__components_challenge_thought_challenge_thought_component__["a" /* ChallengeThoughtComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'good-events', component: __WEBPACK_IMPORTED_MODULE_19__components_good_events_good_events_component__["a" /* GoodEventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'stopwatch', component: __WEBPACK_IMPORTED_MODULE_15__components_stopwatch_stopwatch_component__["a" /* StopwatchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_24__components_timer_timer_component__["a" /* TimerComponent */], },
    { path: 'task', component: __WEBPACK_IMPORTED_MODULE_14__components_task_task_component__["a" /* TaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_13__components_tasks_tasks_component__["a" /* TasksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'thoughts', component: __WEBPACK_IMPORTED_MODULE_17__components_thoughts_thoughts_component__["a" /* ThoughtsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addTask', component: __WEBPACK_IMPORTED_MODULE_25__components_add_task_add_task_component__["a" /* AddTaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_stopwatch_stopwatch_component__["a" /* StopwatchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_breathing_breathing_component__["a" /* BreathingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_thoughts_thoughts_component__["a" /* ThoughtsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_challenge_thought_challenge_thought_component__["a" /* ChallengeThoughtComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_good_events_good_events_component__["a" /* GoodEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_add_task_add_task_component__["a" /* AddTaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_validateService_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_21__services_authService_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_taskService_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Taak toevoegen</h2>\n\n<form (submit)=\"onTaskSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"title\">Naam: </label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n\n          <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" id=\"title\"\n                 placeholder=\"bv. de was ophangen\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"priority\">Prioriteit: </label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <input type=\"number\" [(ngModel)]=\"priority\" name=\"priority\"  class=\"form-control\" id=\"priority\"\n                 placeholder=\"een cijfer van 1 tot 5\" max=\"5\" min=\"1\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n  <div class=\"col-md-3 field-label-responsive\">\n    <label for=\"estimatedTime\">Geschatte tijd (in minuten): </label>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"form-group has-danger\">\n      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n        <input type=\"number\" [(ngModel)]=\"estimatedTime\" name=\"estimatedTime\"  class=\"form-control\" id=\"estimatedTime\"\n               placeholder=\"Hoelang denk je hiermee bezig te zijn?\" min=\"1\" max=\"480\">\n      </div>\n    </div>\n  </div>\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"day\">Deadline: </label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <input type=\"number\" [(ngModel)]=\"day\" name=\"day\"  class=\"form-control\" id=\"day\"\n                 placeholder=\"dd\" min=\"1\" max=\"31\" size=\"2\">\n          <input type=\"number\" [(ngModel)]=\"month\" name=\"monthe\"  class=\"form-control\" id=\"month\"\n                 placeholder=\"mm\" min=\"1\" max=\"12\" size=\"2\">\n          <input type=\"number\" [(ngModel)]=\"year\" name=\"year\"  class=\"form-control\" id=\"year\"\n                 placeholder=\"yyyy\" min=\"2017\" max=\"2100\" size=\"4\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Opslagen\">\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_taskService_task_service__ = __webpack_require__("../../../../../src/app/services/taskService/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTaskComponent = (function () {
    function AddTaskComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.onTaskSubmit = function () {
        this.date = new Date(this.year, this.month, this.day);
        var task = {
            title: this.title,
            priority: this.priority,
            estimatedTime: this.estimatedTime,
            dateDeadline: this.date
        };
        this.taskService.addTask(task);
        this.router.navigate(['/tasks']);
    };
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__("../../../../../src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_taskService_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/breathing/breathing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breathing/breathing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-header text-muted text-right\">\r\n        {{this.whenToStop}}\r\n        <span *ngIf=\"this.whenToStop == 1\">minuut </span>\r\n        <span *ngIf=\"this.whenToStop > 1\">minuten </span>\r\n            oefening\r\n    </div>\r\n\r\n    <div class=\"card-block text-center p-2\">\r\n        <h1>{{this.breatheCue}}</h1>\r\n\r\n        <div *ngIf=\"this.breatheCue == 'Adem in'\">\r\n            <i class=\"fas fa-lg fa-circle\" *ngFor=\"let icon of icons\"></i>\r\n        </div>\r\n        <div *ngIf=\"this.breatheCue == 'Adem uit'\">\r\n            <i class=\"far fa-lg fa-circle\" *ngFor=\"let icon of icons\"></i>\r\n        </div>\r\n\r\n        <p class=\"text-center\">\r\n            <button type=\"button\" [ngClass]=\"this.whenToStop == 1 ? 'btn theme-light': 'btn theme-dark'\" class=\"btn theme-dark\" (click)=\"onClickFirst(1)\">\r\n                1 minuut\r\n            </button>\r\n            <button type=\"button\" [ngClass]=\"this.whenToStop == 2 ? 'btn theme-light': 'btn theme-dark'\" (click)=\"onClickSecond(2)\">\r\n                2 minuten\r\n            </button>\r\n            <button type=\"button\" [ngClass]=\"this.whenToStop == 5 ? 'btn theme-light': 'btn theme-dark'\" (click)=\"onClickThird(5)\">\r\n                5 minuten\r\n            </button>\r\n        </p>\r\n\r\n        <p>\r\n            <button type=\"button\" class=\"btn theme-dark text-center\" (click)=\"onClickStart()\">\r\n                <i class=\"fas fa-play\"></i>\r\n                Starten\r\n            </button>\r\n        </p>\r\n        <p>\r\n            <button type=\"button\" class=\"btn theme-dark\" (click)=\"onClickReset()\">\r\n                <i class=\"fas fa-undo\"></i>\r\n                Reset\r\n            </button>\r\n        </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/breathing/breathing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreathingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreathingComponent = (function () {
    function BreathingComponent(router) {
        this.router = router;
        this.ticks = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.whenToStop = 2;
        this.breatheCue = "Laten we beginnen!";
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000);
    }
    BreathingComponent.prototype.ngOnInit = function () {
    };
    BreathingComponent.prototype.getSeconds = function (ticks) {
        return ticks % 60;
    };
    BreathingComponent.prototype.getMinutes = function (ticks) {
        return (Math.floor(ticks / 60)) % 60;
    };
    BreathingComponent.prototype.onClickStart = function () {
        var _this = this;
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = this.timer.subscribe(function (t) {
            _this.ticks = t;
            _this.seconds = _this.getSeconds(_this.ticks);
            _this.minutes = _this.getMinutes(_this.ticks);
            if (_this.minutes == _this.whenToStop) {
                _this.stop();
            }
            else if (_this.ticks % 5 == 0) {
                _this.toggleBreathe();
            }
            _this.printIcons(_this.ticks);
        });
    };
    BreathingComponent.prototype.printIcons = function (ticks) {
        var number = ticks % 5;
        this.icons = [];
        for (var i = 0; i <= number; i++) {
            this.icons.push(number);
        }
    };
    BreathingComponent.prototype.toggleBreathe = function () {
        this.playBeep();
        if (this.breatheCue == "Adem in") {
            this.breatheCue = "Adem uit";
        }
        else {
            this.breatheCue = "Adem in";
        }
    };
    BreathingComponent.prototype.stop = function () {
        this.onClickReset();
        this.breatheCue = "Klaar!";
        this.playEndTune();
    };
    BreathingComponent.prototype.playEndTune = function () {
        var audio = new Audio();
        audio.src = "../../../assets/TempleBell.mp3";
        audio.load();
        audio.play();
    };
    BreathingComponent.prototype.playBeep = function () {
        var audio = new Audio();
        audio.src = "../../../assets/Tone.mp3";
        audio.load();
        audio.play();
    };
    BreathingComponent.prototype.onClickFirst = function (time) {
        this.whenToStop = time;
    };
    BreathingComponent.prototype.onClickSecond = function (time) {
        this.whenToStop = time;
    };
    BreathingComponent.prototype.onClickThird = function (time) {
        this.whenToStop = time;
    };
    BreathingComponent.prototype.onClickReset = function () {
        console.log("Reset");
        this.reset();
    };
    BreathingComponent.prototype.reset = function () {
        this.unsubscribe();
        this.seconds = 0;
        this.minutes = 0;
    };
    BreathingComponent.prototype.unsubscribe = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    BreathingComponent.prototype.ngOnDestroy = function () {
        this.reset();
    };
    BreathingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breathing',
            template: __webpack_require__("../../../../../src/app/components/breathing/breathing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/breathing/breathing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], BreathingComponent);
    return BreathingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/challenge-thought/challenge-thought.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/challenge-thought/challenge-thought.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  challenge-thought works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/challenge-thought/challenge-thought.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeThoughtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChallengeThoughtComponent = (function () {
    function ChallengeThoughtComponent() {
    }
    ChallengeThoughtComponent.prototype.ngOnInit = function () {
    };
    ChallengeThoughtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-challenge-thought',
            template: __webpack_require__("../../../../../src/app/components/challenge-thought/challenge-thought.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/challenge-thought/challenge-thought.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeThoughtComponent);
    return ChallengeThoughtComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/good-events/good-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/good-events/good-events.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Goede gebeurtenissen</h1>\n<p>Dit is een plek waar enkel positieve herinneringen thuis horen</p>\n\n<form id=\"eventForm\" (submit)=\"onEventSubmit($event)\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-lg-2 field-label-responsive\">\n            <label for=\"content\"><b>Nieuw event:</b></label>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                    <textarea form=\"eventForm\" [(ngModel)]=\"content\" name=\"content\" class=\"form-control\" id=\"content\"\n                              placeholder=\"Schrijf hier wat er is gebeurd\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-lg-2\"></div>\n        <div class=\"col-md-6\">\n            <input type=\"submit\" class=\"btn btn-success\" value=\"Opslaan\">\n        </div>\n    </div>\n</form>\n<hr/>\n<div class=\"card text-center m-2\" *ngFor=\"let event of events\">\n    <div class=\"card-block\">\n        <p class=\"card-text\">{{event.content}}</p>\n    </div>\n    <div class=\"card-footer text-muted\">\n        {{event.date}}\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/good-events/good-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoodEventsComponent = (function () {
    function GoodEventsComponent(flashMessage) {
        this.flashMessage = flashMessage;
        this.events = [{ content: "Ik ben naar de markt geweest en het was heel gezellig", date: this.getToday() }];
    }
    GoodEventsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('events')) {
            this.halenVanLocalStorage();
        }
    };
    GoodEventsComponent.prototype.onEventSubmit = function (event) {
        if (this.content != null) {
            this.goodEvent = {
                content: this.content,
                date: "probeersel"
            };
            this.events.unshift({
                content: this.content,
                date: this.getToday()
            });
            this.opslagenInLocalStorage();
        }
        var form = document.getElementById('eventform');
        form.reset();
        event.preventDefault();
    };
    GoodEventsComponent.prototype.getToday = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var vandaag;
        return vandaag = dd + '/' + mm + '/' + yyyy;
    };
    GoodEventsComponent.prototype.opslagenInLocalStorage = function () {
        localStorage.setItem('events', JSON.stringify(this.events));
    };
    GoodEventsComponent.prototype.halenVanLocalStorage = function () {
        this.events = JSON.parse(localStorage.getItem('events'));
    };
    GoodEventsComponent.prototype.removeLocalStorage = function () {
        localStorage.removeItem('events');
    };
    GoodEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-events',
            template: __webpack_require__("../../../../../src/app/components/good-events/good-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/good-events/good-events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], GoodEventsComponent);
    return GoodEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n  <h1 class=\"header theme-writing\">Hoofdpagina</h1>\n  <p>Dit wordt een website om rust te vinden</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"email\">E-mailadres</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fas fa-at\"></i></div>\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\"\n                 placeholder=\"voorbeeld@voorbeeld.com\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 field-label-responsive\">\n      <label for=\"password\">Paswoord</label>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\" id=\"password\"\n                 placeholder=\"Paswoord\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Inloggen\">\n    </div>\n    <flash-messages></flash-messages>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("Login component is ingeladen");
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log("onLoginSubmit()");
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success m-3',
                    timeout: 3000
                });
                _this.router.navigate(['home']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger m-3',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    background-color: #427f68;\r\n}\r\n.navbar .navbar-brand {\r\n    color: #e3ffed;\r\n}\r\n.navbar .navbar-brand:hover,\r\n.navbar .navbar-brand:focus {\r\n    color: #427f68;\r\n}\r\n.navbar .navbar-text {\r\n    color: #e3ffed;\r\n}\r\n.navbar .navbar-nav .nav-link {\r\n    color: #e3ffed;\r\n    border-radius: .25rem;\r\n    margin: 0 0.25em;\r\n}\r\n.navbar .navbar-nav .nav-link:not(.disabled):hover,\r\n.navbar .navbar-nav .nav-link:not(.disabled):focus {\r\n    color: #427f68;\r\n}\r\n.navbar .navbar-nav .dropdown-menu {\r\n    background-color: #427f68;\r\n    border-color: #69cca7;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item {\r\n    color: #e3ffed;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,\r\n.navbar .navbar-nav .dropdown-menu .dropdown-item.active {\r\n    color: #427f68;\r\n    background-color: #69cca7;\r\n}\r\n.navbar .navbar-nav .dropdown-menu .dropdown-divider {\r\n    border-top-color: #69cca7;\r\n}\r\n.navbar .navbar-nav .nav-item.active .nav-link,\r\n.navbar .navbar-nav .nav-item.active .nav-link:hover,\r\n.navbar .navbar-nav .nav-item.active .nav-link:focus,\r\n.navbar .navbar-nav .nav-item.show .nav-link,\r\n.navbar .navbar-nav .nav-item.show .nav-link:hover,\r\n.navbar .navbar-nav .nav-item.show .nav-link:focus {\r\n    color: #427f68;\r\n    background-color: #69cca7;\r\n}\r\n.navbar .navbar-toggle {\r\n    border-color: #69cca7;\r\n}\r\n.navbar .navbar-toggle:hover,\r\n.navbar .navbar-toggle:focus {\r\n    background-color: #69cca7;\r\n}\r\n.navbar .navbar-toggle .navbar-toggler-icon {\r\n    color: #e3ffed;\r\n}\r\n.navbar .navbar-collapse,\r\n.navbar .navbar-form {\r\n    border-color: #e3ffed;\r\n}\r\n.navbar .navbar-link {\r\n    color: #e3ffed;\r\n}\r\n.navbar .navbar-link:hover {\r\n    color: #427f68;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {\r\n        color: #e3ffed;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n        color: #427f68;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n        color: #427f68;\r\n        background-color: #69cca7;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {\r\n        color: #e3ffed;\r\n    }\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n        color: #427f68;\r\n    }\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n        color: #427f68;\r\n        background-color: #69cca7;\r\n    }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {\r\n        color: #e3ffed;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n        color: #69cca7;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n        color: #427f68;\r\n        background-color: #69cca7;\r\n    }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {\r\n        color: #e3ffed;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n        color: #69cca7;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n        color: #427f68;\r\n        background-color: #69cca7;\r\n    }\r\n}\r\n\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #e3ffed;\r\n}\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #69cca7;\r\n}\r\n.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #427f68;\r\n    background-color: #69cca7;\r\n}\r\n\r\nh1{\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><i class=\"fas fa-home\"></i></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\r\n    <i class=\"fas fa-bars navbar-toggler-icon\"></i><!--<span class=\"navbar-toggler-icon\"></span>-->\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto navbar-left\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\"[routerLink]=\"['/tasks']\">Taken</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/thoughts']\">Gedachten</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/good-events']\">Gebeurtenissen</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/breathing']\">Ademhaling</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <!--Als ingelogd-->\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\"   [routerLink]=\"['/profiel']\"><i class=\"fas fa-user\"></i> Profiel</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\"><i class=\"fas fa-sign-out-alt\"></i> Uitloggen</a>\r\n      </li>\r\n\r\n      <!--Als uitgelogd-->\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\"  [routerLink]=\"['/login']\"><i class=\"fas fa-sign-in-alt\"></i> Inloggen</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Registreren</a>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Je bent uitgelogd', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Profielpagina van {{user.firstName}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><b>Naam:</b> {{user.firstName}} {{user.lastName}}</li>\n    <li class=\"list-group-item\"><b>E-mailadres:</b> {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("onInit profile.component.ts");
        this.authService.getProfile().subscribe(function (profile) {
            console.log("profiel:" + JSON.stringify(profile));
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6\">\r\n    <h2>Registreren</h2>\r\n    <p>Welkom, registreer je hieronder en geniet van alle voordelen! We beloven dat we niets met je gegevens gaan doen zonder jou toestemming.</p>\r\n    <hr>\r\n  </div>\r\n</div>\r\n\r\n<form (submit)=\"onRegisterSubmit()\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"firstName\">Voornaam</label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fas fa-user\"></i></div>\r\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\"\r\n                 placeholder=\"Voornaam\" autofocus>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"lastName\">Familienaam</label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fas fa-user\"></i></div>\r\n          <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" id=\"lastName\"\r\n                 placeholder=\"Familienaam\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"email\">E-mailadres</label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fas fa-at\"></i></div>\r\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\"\r\n                 placeholder=\"voorbeeld@voorbeeld.com\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"password\">Paswoord</label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\r\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\" id=\"password\"\r\n                 placeholder=\"Paswoord\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Registreren\">\r\n    </div>\r\n    <flash-messages></flash-messages>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validateService_validate_service__ = __webpack_require__("../../../../../src/app/services/validateService/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashmessage, authService, router) {
        this.validateService = validateService;
        this.flashmessage = flashmessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("register component geladen");
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log("Op registreren geklikt");
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        /*testen of alle velden zijn ingevuld*/
        if (!this.validateService.validateRegister(user)) {
            console.log("Niet alle velden zijn ingevuld");
            this.flashmessage.show("Gelieve alle velden in te vullen", { cssClass: 'alert-danger m-3', timeout: 3000 });
            return false;
        }
        /*testen of e-mail juiste vorm is*/
        if (!this.validateService.validateEmail(user.email)) {
            console.log("E-mail is niet correct");
            this.flashmessage.show("E-mailadres is niet correct", { cssClass: 'alert-danger m-3', timeout: 3000 });
            return false;
        }
        //User registreren via de auth service (die het weer haalt van routes/user.js)
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success m-3', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger m-3', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validateService_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stopwatch/stopwatch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stopwatch/stopwatch.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  stopwatch works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/stopwatch/stopwatch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopwatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StopwatchComponent = (function () {
    function StopwatchComponent() {
    }
    StopwatchComponent.prototype.ngOnInit = function () {
    };
    StopwatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stopwatch',
            template: __webpack_require__("../../../../../src/app/components/stopwatch/stopwatch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stopwatch/stopwatch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StopwatchComponent);
    return StopwatchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".taskDone{\r\n    color: green;\r\n    font-style: italic;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"this.isDone ? 'row taskDone': 'row'\">\n    <div class=\"card col-1\">\n        <div class=\"card-block\">\n            {{task.priority}}\n        </div>\n    </div>\n    <div class=\"card col-4\">\n        <div class=\"card-block\">\n            {{task.title}}\n        </div>\n    </div>\n    <div class=\"card col-2\">\n        <div>\n            {{task.estimatedTime}} min\n        </div>\n    </div>\n    <div class=\"card col-3\">\n        <div class=\"card-block\">\n            {{this.datum}}\n        </div>\n    </div>\n    <div class=\"card col-2\">\n        <div class=\"card-block\">\n            <a *ngIf=\"this.task.status == 'Todo'\" href=\"#\" type=\"button\" class=\"btn btn-sm btn-success\"\n               data-toggle=\"tooltip\" title=\"Taak is klaar\"\n               (click)=\"onClickDone($event)\">\n                <i class=\"fas fa-check\"></i>\n            </a>\n            <!--\n            <a href=\"#\" type=\"button\" class=\"btn btn-sm btn-warning\"\n               data-toggle=\"tooltip\" title=\"Taak aanpassen\">\n                <i class=\"far fa-edit\"></i>\n            </a>\n            -->\n            <a href=\"#\" type=\"button\" class=\"btn btn-sm btn-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"\n               title=\"Taak definitief verwijderen (uit alle lijsten)\"\n              >\n               <i class=\"far fa-trash-alt\"></i>\n            </a>\n            <a href=\"#\" type=\"button\" class=\"btn btn-sm btn-secondary\"\n               *ngIf=\"this.task.status == 'Todo'\"\n               data-toggle=\"tooltip\" title=\"Time deze taak\"\n               (click)=\"onClickTimer($event)\">\n                <i class=\"fas fa-stopwatch\"></i>\n            </a>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Bent u zeker dat u deze taak wilt verwijderen?</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                Deze zal niet meer te zien zijn in je \"done\" lijstje maar zal helemaal verwijderd worden.\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuleren</button>\n                <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\" (click)=\"onClickDelete($event)\">Verwijderen</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task__ = __webpack_require__("../../../../../src/app/models/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_taskService_task_service__ = __webpack_require__("../../../../../src/app/services/taskService/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskComponent = (function () {
    function TaskComponent(taskService, router, tasksComponent) {
        this.taskService = taskService;
        this.router = router;
        this.tasksComponent = tasksComponent;
        this.isDone = false;
        this.weekday = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
    }
    TaskComponent.prototype.ngOnInit = function () {
        if (this.task.dateDeadline) {
            var d = new Date(this.task.dateDeadline);
            this.datum =
                this.weekday[d.getDay()] + " "
                    + d.getDate() + "/" +
                    ((d.getMonth()) + 1) + "/" +
                    d.getFullYear();
            this.deadlineDate = this.task.dateDeadline;
        }
        if (this.task.status == "Done") {
            this.isDone = true;
        }
    };
    TaskComponent.prototype.onClickDelete = function (event) {
        event.preventDefault();
        this.taskService.deleteTask(this.task._id);
        this.tasksComponent.getTasks();
    };
    TaskComponent.prototype.onClickDone = function (event) {
        event.preventDefault();
        console.log("onClickDone");
        this.task.status = "Done";
        this.task.priority = 0;
        var task = this.task;
        this.taskService.updateTask(this.task._id, task);
        this.tasksComponent.getTasks();
    };
    TaskComponent.prototype.onClickTimer = function (event) {
        event.preventDefault();
        this.router.navigate(['/timer']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_task__["a" /* Task */])
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/components/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_taskService_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__tasks_tasks_component__["a" /* TasksComponent */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"float-left col-sm-6\">\r\n        <h2>Taken</h2>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6 text-right\">\r\n        <button type=\"button\" class=\"btn theme\" (click)=\"getTasks()\">\r\n            Alle\r\n        </button>\r\n        <button type=\"button\" class=\"btn theme\" (click)=\"onClickTodo()\">\r\n            To do\r\n        </button>\r\n        <button type=\"button\" class=\"btn theme\" (click)=\"onClickDone()\">\r\n            Done\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"card col-1  theme-neutral\">\r\n        <div class=\"card-block\">\r\n            <i class=\"fas fa-star\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Geef je taak prioriteit!\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-4 theme-neutral\">\r\n        <div class=\"card-block\">\r\n            Taak\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-2 theme-neutral\">\r\n        <div class=\"card-block\">\r\n            Verwachte tijd\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-3 theme-neutral\">\r\n        <div class=\"card-block\">\r\n            Datum\r\n        </div>\r\n    </div>\r\n    <div class=\"card col-2 theme-neutral\">\r\n        <div class=\"card-block\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <app-task [task]=\"task\" *ngFor=\"let task of tasks\"></app-task>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <button type=\"button\" class=\"btn btn-success mt-2\" (click)=\"onClickAddTask()\"><i class=\"fas fa-plus\"></i> Taak\r\n        toevoegen\r\n    </button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_taskService_task_service__ = __webpack_require__("../../../../../src/app/services/taskService/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            console.log(tasks);
            _this.tasks = _this.tasks.sort(_this.sorterenOpPrioriteit);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TasksComponent.prototype.sorterenOpPrioriteit = function (a, b) {
        if (a.priority > b.priority)
            return -1;
        if (a.priority < b.priority)
            return 1;
        return 0;
    };
    TasksComponent.prototype.onClickAddTask = function () {
        this.router.navigate(['/addTask']);
    };
    TasksComponent.prototype.onClickTodo = function () {
        var _this = this;
        this.taskService.getTasksToDo().subscribe(function (tasks) {
            _this.tasks = tasks;
            console.log(tasks);
            _this.tasks = _this.tasks.sort(_this.sorterenOpPrioriteit);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TasksComponent.prototype.onClickDone = function () {
        var _this = this;
        this.taskService.getTasksDone().subscribe(function (tasks) {
            _this.tasks = tasks;
            console.log(tasks);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_taskService_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/thoughts/thoughts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/thoughts/thoughts.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Gedachten</h1>\n<p>Dit wordt een plaats om je negatieve gedachten op te lijsten en uit te dagen.</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/thoughts/thoughts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoughtsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThoughtsComponent = (function () {
    function ThoughtsComponent() {
    }
    ThoughtsComponent.prototype.ngOnInit = function () {
    };
    ThoughtsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-thoughts',
            template: __webpack_require__("../../../../../src/app/components/thoughts/thoughts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/thoughts/thoughts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThoughtsComponent);
    return ThoughtsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Timer</h2>\n<div class=\"card\">\n    <div class=\"card-block text-center\">\n        <h1 class=\"text-center\">{{hours}}:{{minutes}}:{{seconds}}</h1>\n        <p>\n            <button type=\"button\" class=\"btn theme-dark text-center\" (click)=\"onClickStart()\">\n                <i class=\"fas fa-play\"></i>\n                (her)starten\n            </button>\n        </p>\n        <p>\n            <button type=\"button\" class=\"btn theme-dark\" (click)=\"onClickPause()\">\n                <i class=\"fas fa-pause\"></i>\n                Pauzeren\n            </button>\n        </p>\n        <p>\n            <button type=\"button\" class=\"btn theme-dark\" (click)=\"onClickReset()\">\n                <i class=\"fas fa-undo\"></i>\n                Reset timer\n            </button>\n        </p>\n        <p>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"onClickDone()\">\n                <i class=\"fas fa-check\"></i>\n                Klaar!\n            </button>\n        </p>\n        <div class=\"card-footer\">\n            <a href=\"#\" class=\"card-link\" (click)=\"onClickCancel($event)\">\n                <i class=\"fas fa-ban\"></i>\n                Annuleren\n            </a>\n        </div>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_taskService_task_service__ = __webpack_require__("../../../../../src/app/services/taskService/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerComponent = (function () {
    function TimerComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
        this.ticksOnPause = 0;
        this.ticks = 0;
        this.minutes = 0;
        this.hours = 0;
        this.seconds = 0;
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000);
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initialPadding();
    };
    TimerComponent.prototype.unsubscribe = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    TimerComponent.prototype.initialPadding = function () {
        this.seconds = this.pad(this.seconds);
        this.minutes = this.pad(this.minutes);
        this.hours = this.pad(this.hours);
    };
    TimerComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    TimerComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    TimerComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    TimerComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    TimerComponent.prototype.onClickStart = function () {
        var _this = this;
        this.sub = this.timer.subscribe(function (t) {
            _this.ticks = t;
            _this.seconds = _this.getSeconds(_this.ticks + _this.ticksOnPause);
            _this.minutes = _this.getMinutes(_this.ticks + _this.ticksOnPause);
            _this.hours = _this.getHours(_this.ticks + _this.ticksOnPause);
        });
    };
    TimerComponent.prototype.onClickPause = function () {
        console.log("Pauze");
        this.unsubscribe();
        this.ticksOnPause = this.ticks + this.ticksOnPause;
    };
    TimerComponent.prototype.onClickReset = function () {
        console.log("Reset");
        this.unsubscribe();
        this.ticksOnPause = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.initialPadding();
    };
    TimerComponent.prototype.onClickDone = function () {
        this.unsubscribe();
        this.router.navigate(['/tasks']);
    };
    TimerComponent.prototype.onClickCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/tasks']);
        this.unsubscribe();
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        this.ticksOnPause = 0;
        this.unsubscribe();
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__("../../../../../src/app/components/timer/timer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_taskService_task_service__["a" /* TaskService */]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/models/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
/**
 * Created by Marijke on 30/12/2017.
 */
var Task = (function () {
    function Task(_id, title, estimatedTime, userId, status, dateDeadline, priority, dateFinished, realTime) {
        this._id = _id;
        this.title = title;
        this.estimatedTime = estimatedTime;
        this.userId = userId;
        this.status = status;
        this.dateDeadline = dateDeadline;
        this.priority = priority;
        this.dateFinished = dateFinished;
        this.realTime = realTime;
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/services/authService/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //map operator om met observables te werken



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global__["a" /* GlobalVariable */].base_url + 'user/registreren', user, { headers: headers });
        /*
        //die user/registreren slaagt op routes-->user.js dat is de user en daarin
        //zit een post methode registreren en dat is dat tweede deel
        //hier zit dus de verbintenis met de backend
        */
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global__["a" /* GlobalVariable */].base_url + 'user/authenticeren', user, { headers: headers });
    };
    AuthService.prototype.getProfile = function () {
        console.log("***auth.service getProfile()");
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__global__["a" /* GlobalVariable */].base_url + 'user/profiel', { headers: headers });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        return this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        console.log("methode storeUserData in authservice");
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });
/**
 * Created by Marijke on 30/12/2017.
 */
var GlobalVariable = Object.freeze({
    base_url: 'https://mean-cvs.herokuapp.com/',
});


/***/ }),

/***/ "../../../../../src/app/services/taskService/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authService_auth_service__ = __webpack_require__("../../../../../src/app/services/authService/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskService = (function () {
    function TaskService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    TaskService.prototype.getTasks = function () {
        console.log("***taskService getTasks()");
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + 'task/alleTaken';
        return this.http.get(route, { headers: headers });
    };
    TaskService.prototype.getTasksToDo = function () {
        console.log("***taskService getTasksTodo()");
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + 'task/alleTakenTodo';
        return this.http.get(route, { headers: headers });
    };
    TaskService.prototype.getTasksDone = function () {
        console.log("***taskService getTasksDone()");
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + 'task/alleTakenDone';
        return this.http.get(route, { headers: headers });
    };
    TaskService.prototype.addTask = function (task) {
        console.log("***taskService addTask");
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + 'task/taakToevoegen';
        return this.http.post(route, task, { headers: headers }).subscribe(function (data) {
            console.log("data: " + JSON.stringify(data));
        }, function (err) {
            console.log("error bij taak toevoegen: " + JSON.stringify(err));
        });
        ;
    };
    TaskService.prototype.deleteTask = function (taskId) {
        console.log("deleteTask in task.service met taskId: " + taskId);
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + "task/taakVerwijderen/" + taskId;
        return this.http.delete(route, { headers: headers }).subscribe(function (data) {
            console.log(data);
        });
    };
    TaskService.prototype.updateTask = function (taskId, task) {
        this.loadToken();
        var headers = this.getHeaders();
        var route = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GlobalVariable */].base_url + "task/taakWijzigen/" + taskId;
        return this.http.put(route, task, { headers: headers }).subscribe(function (data) {
            console.log("data: " + JSON.stringify(data));
        }, function (err) {
            console.log("error bij taak wijzigen: " + JSON.stringify(err));
        });
    };
    TaskService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', this.authToken)
            .append('Content-Type', 'application/json');
    };
    TaskService.prototype.loadToken = function () {
        this.authToken = this.authService.loadToken();
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authService_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validateService/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        console.log("in validateRegister in validateService");
        if (user.firstName == null || user.lastName == null || user.email == null || user.password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map