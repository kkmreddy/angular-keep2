import { Component} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService:AuthenticationService,private routerservice:RouterService){}

    loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  }
  );
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

    loginSubmit() {

      console.log(this.loginForm.value);
      this.authService.authenticateUser(this.loginForm.value).subscribe(data=>{
        //console.log(data)
        this.authService.setBearerToken(data['token'])
        this.routerservice.routeToDashboard();
      },
        
        error=>{
          console.log(error)
        })


    }
}
