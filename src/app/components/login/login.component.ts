import { login } from './../../reducers/actions';
import { AuthService } from './../../services/authService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private router: Router,
    private store: Store,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success',
        //   timeout: 3000,
        // });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        // this.flashMessage.show(err.message, {
        //   cssClass: 'alert-danger',
        //   timeout: 4000,
        // });
      });
  }
}