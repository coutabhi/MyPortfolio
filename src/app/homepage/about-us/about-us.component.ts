import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService, User } from 'src/app/services/authservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  message: string = '';

  constructor(private messageService: MessageService,private authService: AuthserviceService,private router: Router) { }

  ngOnInit(): void {
    this.messageService.getCurrentMessage().subscribe((message: string) => {
      this.message = message;
    });
    const currentUser = sessionStorage.getItem('currentUser');
    console.log(currentUser);
    if (!currentUser) {
      this.router.navigate(['/signin']);
    }
  }
}