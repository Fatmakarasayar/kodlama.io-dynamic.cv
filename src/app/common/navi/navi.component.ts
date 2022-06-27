import { FirebaseService } from './../../services/firebase.service';
import { GetUserData } from './../../models/getUserData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  user = GetUserData
  constructor(private firebaseService:FirebaseService) { }
  ngOnInit(): void {
    this.firebaseService.getUser()
  }


}
