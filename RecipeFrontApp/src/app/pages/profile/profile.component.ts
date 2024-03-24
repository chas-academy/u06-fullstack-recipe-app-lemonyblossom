import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  üser: User;

  constructor(private auth)

}
