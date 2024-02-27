import { Injectable } from '@angular/core';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  private email:string="abhishekyadav228899@gmail.com";
  private password:string="abhi@1234";

  login(email:string, password:string):boolean {
    if(email===this.email && password === this.password){
      sessionStorage.setItem('currentUser', JSON.stringify({ email: email }));
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }
  
  getCurrentUser(): User | null {
    const currentUserStr = sessionStorage.getItem('currentUser');
    if (currentUserStr) {
      try {
        return JSON.parse(currentUserStr) as User;
      } catch (error) {

        return null;
      }
    }
    return null;
  }
}
