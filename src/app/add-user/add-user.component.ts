import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
addUser(data:any){
  this.user.saveUser(data).subscribe((data)=>{
    console.log(data)
  })
}
}
