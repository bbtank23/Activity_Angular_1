import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input [(ngModel)]="username" placeholder="Enter username" />
      <p *ngIf="username">
  Hello There!  Behold the astonishing handsomeness of the one and only, {{ username }}! With a username like that, it's as if the very essence of charm and allure has taken digital form. The elegance, the style, the sheer charisma – it's all encapsulated within those characters. People far and wide will undoubtedly be enchanted by the sheer handsomeness exuded by this username. It's not just a string; it's a beacon of aesthetic delight in the vast sea of the digital realm! Bravo, {{ username }}, for gracing us with your unparalleled charm! 🎩✨
</p>

      <button [disabled]="username === ''" (click)="resetUsername()">Reset Username</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  username: string = '';

  resetUsername() {
    this.username = '';
  }
}
