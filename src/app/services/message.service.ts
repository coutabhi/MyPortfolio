import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setMessage(msg: string, duration: number): void {
    this.messageSubject.next(msg);
    setTimeout(() => {
      this.clearMessage();
    }, duration);
  }

  clearMessage(): void {
    this.messageSubject.next('');
  }

  getCurrentMessage(): BehaviorSubject<string> {
    return this.messageSubject;
  }
}
