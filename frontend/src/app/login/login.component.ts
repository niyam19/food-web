import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: String = '';

  constructor(private fb: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void{
    if(this.loginForm.invalid){
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const {email, password} = this.loginForm.value;

    if(email == 'niyam@gmail.com' && password == 123456){
      this.router.navigate(['/'], { replaceUrl: true });
    } else {
      this.errorMessage = 'Invalid credentials. Try again.';
    }
  }
}
