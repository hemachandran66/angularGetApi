import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users:any;
  columns=['id','email','first_name','last_name']
  constructor(private user:UserService) {
    this.user.get().subscribe((data)=>{
      console.log(data)
      this.users=data;
    });
   
   }

  ngOnInit(): void {
  }

}
