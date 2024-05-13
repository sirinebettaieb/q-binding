import { Component } from '@angular/core';
import { User } from './user.model'; // Import the 'User' type from the appropriate module.

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User = {
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    quote: 'I am happy',
    age: 25,
    firstName: 'Doe',
    lastName: 'John',
    hideAge: false
  };
photo: any;
  constructor() {
    this.user.age = 25;
  }
  ngOnInit() {
    this.user.age = 25;
  }
  toggleAge() {
    this.user.hideAge = !this.user.hideAge;
  }
  getAge() {
    return this.user.age;
  }
  setAge(age: number) {
    this.user.age = age;
  }
  getUser() {
    return this.user;
  }
  setUser(user: User) {
    this.user = user;
  }
  getFullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
  setFullName(firstName: string, lastName: string) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
  }
  getPhoto() {
    return this.user.photo;
  }
  setPhoto(photo: string) {
    this.user.photo = photo;
  }
  getQuote() {
    return this.user.quote;
  }
  setQuote(quote: string) {
    this.user.quote = quote;
  }
  isHideAge() {
    return this.user.hideAge;
  }
  setHideAge(hideAge: boolean) {
    this.user.hideAge = hideAge;
  }

}

