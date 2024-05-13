import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface User {
  name: string,
  firstName: string,
  age: number,
  quote: string,
  photo: string,
  isHidden: boolean
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'Two beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    isHidden: false
  };

  sayHello() : void {
    alert("hello !")
  }
  toggleHidden() : void {
    this.user.isHidden = !this.user.isHidden;
  }
}
 

