import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  @ViewChild('textButton') textButton!: ElementRef;
  @ViewChild('inputName') inputName!: ElementRef;
  @ViewChild('inputEmail') inputEmail!: ElementRef;

  btnDisabled = true;

  ngAfterViewInit(): void {

  }


  isValid() {
    const name = this.inputName.nativeElement;

     const email = this.inputEmail.nativeElement;

     if(name.value!= '' && email.value != ''){
      this.btnDisabled = false
      this.textButton.nativeElement.textContent = "HAZ CLICK"
      this.textButton.nativeElement.style.backgroundColor = "green"
      this.textButton.nativeElement.style.color = "white"
     }

  }

  submitForm() {
    console.log('hello!');
  }
}
