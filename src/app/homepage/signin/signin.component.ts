import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  msg:string='';
  userEmail:string='';
  userPassword:string='';
  
  constructor(
    private authService: AuthserviceService,
    private router: Router,
    private messageService: MessageService
  ){}

  onLogin(){
    const isAuthenticated:boolean = this.authService.login(this.userEmail, this.userPassword);
    if(isAuthenticated){
      this.messageService.setMessage('Login successful.', 2000);
      this.router.navigateByUrl('/aboutus');
      console.log('Login successful');
    } else {
      this.messageService.setMessage('Invalid credentials! Please try again.', 2000);
      this.msg="Invalid Credentials! enter details again";
      console.log('Invalid credentials. Please try again.');
    }

  }
}
