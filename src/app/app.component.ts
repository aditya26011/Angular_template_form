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

  firstName:string='';
  lastName:string='';
  emailAddress:string='';
  dob:string=''

  onFormSubmitted() {
    console.log(this.form);
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.address.city)
        console.log(this.form.value.address.country)
  }

  createUsername(){
    let username='';
    if(this.firstName.length>=3){
      username+=this.firstName.slice(0,3);
    }
    else{
      username+=this.firstName;
    }
     if(this.lastName.length>=3){
      username+=this.lastName.slice(0,3);
    }
    else{
      username+=this.lastName;
    }

    let dateTime=new Date(this.dob);
      username+=dateTime.getFullYear();

      username+=username.toLowerCase();
      console.log(username);
      this.form.setValue({
      firstname:this.form.value.firstname,
      lastname:this.form.value.lastname,
      email:this.form.value.email,
      phonenumber:this.form.value.phonenumber,
      dateofbirth:this.form.value.dateofbirth,
      username:username,
        gender:this.form.value.gender,
        address:{
          street2:this.form.value.address.street2,
          street1:this.form.value.address.street1,
          country:this.form.value.address.country,
          city:this.form.value.address.city,
          region:this.form.value.address.region,
          postal:this.form.value.address.postal

        }
      })
  }
  
}
