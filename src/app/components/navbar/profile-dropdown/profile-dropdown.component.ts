import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/auth/model/user.model';
import * as actions from '../../../auth/auth.actions';
import { select, Store } from '@ngrx/store';
import { MessageService } from '../../../services/MessageService';
import { AuthService } from '../../../auth/AuthService';
import { AppState } from 'src/app/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {

  @Input() user: User;

  userPhotoPlaceholder:string = 'https://www.gravatar.com/avatar/02f1c10ef8930a258e3d6b6e8640d155?s=200&r=pg&d=mm';
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private flashMessage: MessageService,
    private router: Router
  ) {}

  onLogoutClick() {
    this.authService.logout();
    this.store.dispatch(actions.logout());
    this.flashMessage.showMessage('You are now logged out', 'alert-warning', 3000);
    this.router.navigate(['/login']);
  };

  ngOnInit(): void {
  }

}
