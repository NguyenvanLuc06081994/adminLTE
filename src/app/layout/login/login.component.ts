import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private loginService : LoginService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group(
      {
        email: [''],
        password: ['']
      }
    );
  }

  // tslint:disable-next-line:typedef
  login() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userService.users.length; i++) {
      // tslint:disable-next-line:max-line-length
      if (this.formLogin.value.email === this.userService.users[i].email && this.formLogin.value.password == this.userService.users[i].password) {
          this.loginService.isLogin = true;
      }
    }
    console.log(this.loginService.isLogin);
  }
}
