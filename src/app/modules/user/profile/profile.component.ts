import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileData:any;
  public link:any;
  public numbers;
  private subscription: Subscription;  
  constructor(private userService:UserService) {
    this.userService.number.subscribe((res) => {
      this.numbers = res;
    });
   }

  ngOnInit() {
    this.subscription = this.userService.me().subscribe(
      res => {
        this.profileData = res;
      }
    );
  }
  
}
