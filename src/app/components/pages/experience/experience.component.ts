import { FirebaseService } from './../../../services/firebase.service';
import { GetExperienceData } from './../../../models/getExperinceData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = GetExperienceData
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getExperiences()
  }

}
