import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password:string = ""
  length: number = 0;
  includeLetters: boolean = false;
  includeNumber: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(target: string | any) {
    const parseValue = parseInt(target.value);
    if (!isNaN(parseValue)) {
      debugger;  
      this.length = parseValue;
    }
    else this.length = 0
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers() {
    this.includeNumber = !this.includeNumber;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  buttonClick() {
    const numbers = "1234567890"
    const  letters = "abcdefghijklmnoprstuvyzABCDEFGHIJKLMNOPRSTUVYZWQwq" 
    const symbols = "!@#$%&*()'"

    let validChars = ""
    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeNumber) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = "";
    for (let i = 0; i < this.length; i++){
      
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password=generatedPassword
  }
}
