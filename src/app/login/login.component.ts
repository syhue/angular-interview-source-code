import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email = "";
    password="";
    Alert = "";




  public showContainer: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }

  onEmail(event: Event) {
      this.email =(<HTMLInputElement>event.target).value;

  }

  onPassword(event: Event) {
      this.password =(<HTMLInputElement>event.target).value;

  }

  onClick() {
      if(this.email.length== 0 || this.password.length == 0){
          this.Alert = "Please fill in your email and password";
      }

  }

}
