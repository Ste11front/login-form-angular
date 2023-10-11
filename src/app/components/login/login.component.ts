import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    password: ['', [Validators.required, CustomValidators.isPasswordValid()]],
  })

  constructor(private fb:FormBuilder, private authS: AuthService, private router: Router){}

  onSubmit(){
    console.log(this.loginForm.value);
    const isUserValid = this.authS.checkUser(this.loginForm.value.userName as string, this.loginForm.value.password as string);
    if (isUserValid.valid) {
      this.authS.saveLogin()
      this.router.navigateByUrl('/secret')
    } else {
      alert(isUserValid.message)
    }
  }

}
