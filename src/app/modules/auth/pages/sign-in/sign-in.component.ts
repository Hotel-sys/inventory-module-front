import { NgClass, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { LoginService } from '../../services/login.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgIf, UbButtonDirective, NgClass],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  loginService = inject(LoginService);
  tokenService = inject(TokenService);

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    if (!this.form.invalid) {
      this.loginService.login({ email, senha: password.trim() }).subscribe({
        next: (response) => {
          console.log(response);
          this.tokenService.addToken(response.jwt);
          this._router.navigate(['/']);
        },
      });
    }

    // this._router.navigate(['/']);
  }
}
