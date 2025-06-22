import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-form';

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {
      id: 'check-male',
      value: 'Male',
      display: 'Male',
    },
    {
      id: 'check-female',
      value: 'Female',
      display: 'Female',
    },
    {
      id: 'other',
      value: 'other',
      display: 'prefer Not to say',
    },
  ];

  firstName='';
  lastName='';
  emailAddress='';

  onFormSubmitted() {
    console.log(this.form);
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
  }
}
