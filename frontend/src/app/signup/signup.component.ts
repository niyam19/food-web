import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],  // fullName control
      email: ['', [Validators.required, Validators.email]],           // email control
      password: ['', [Validators.required, Validators.minLength(6)]], // password control
      confirmPassword: ['', Validators.required]                      // confirmPassword control
    }, { validators: this.passwordMatchValidator }); // Custom validator to check passwords match
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    console.log('Form Value:', this.signupForm.value);
    if (this.signupForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const { fullName, email, password } = this.signupForm.value;

    // Here you would make an API call to create the user
    console.log('Signup Success', fullName, email, password);

    // Navigate to login page after successful signup
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
