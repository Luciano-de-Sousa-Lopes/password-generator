import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  password: string = '';

  getLength(e: Event): void {
    this.length = 0;
    const parsedLength = Number((e.target as HTMLInputElement).value);
    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
    }
  }

  getLetters() {
    this.useLetters = !this.useLetters;
  }

  getNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  getSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%¨&*()_+-"';
    let passwordCharacters = '';

    if (this.useLetters) passwordCharacters += letters;
    if (this.useNumbers) passwordCharacters += numbers;
    if (this.useSymbols) passwordCharacters += symbols;

    let randomGeneratedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * passwordCharacters.length);
      randomGeneratedPassword += passwordCharacters[index];
    }
    this.password = randomGeneratedPassword;
  }

}
