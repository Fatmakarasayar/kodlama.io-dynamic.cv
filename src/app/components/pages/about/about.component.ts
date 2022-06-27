import { GetSocialData } from './../../../models/getSocialData';
import { GetUserData } from './../../../models/getUserData';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users = GetUserData
  socials = GetSocialData
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getUser()
    this.firebaseService.getSocials()
  }

}
