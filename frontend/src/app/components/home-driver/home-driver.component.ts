import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-driver',
  templateUrl: './home-driver.component.html',
  styleUrls: ['./home-driver.component.css']
})
export class HomeDriverComponent implements OnInit {
user:Object;
 closeResult: string;

   constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private modalService: NgbModal) { }
              
              
    ngOnInit() {
      this.authService.getProfile().subscribe(profile => {
              console.log("profiel:" + JSON.stringify(profile));
              this.user = profile.user;
              console.log(this.user);
          },
          err => {
              console.log(err);
              return false;
          });
  }
  
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
