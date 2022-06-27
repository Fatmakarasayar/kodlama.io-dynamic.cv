import { FirebaseService } from './../../../services/firebase.service';
import { GetEducationData } from './../../../models/getEducationData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = GetEducationData
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getEducation()
  }

}
