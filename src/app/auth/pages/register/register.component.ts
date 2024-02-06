import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal  from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/auth-shared.scss']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  
  suscription: Subscription= new Subscription;
  public formSubmitted = false;
  

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required,]],
    confirm_password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  }, {
    validators: this.passwordsEquals('password', 'confirm_password')
  });


  onSubmit() {
    this.formSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.suscription = this.authService.createUser(this.registerForm.value)
      .subscribe((data) => {
        console.log(data)
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error')
      });
    console.log(this.registerForm.value);
  }

  passwordsEquals(pass1:string, pass2: string ) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control?.value === pass2Control?.value) {
        pass1Control?.setErrors(null)
      } else {
        pass1Control?.setErrors({isNotEqual: true})
      }
    }
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}
