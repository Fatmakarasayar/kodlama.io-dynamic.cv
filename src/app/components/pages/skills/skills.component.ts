import { GetSkillData } from './../../../models/getSkillData';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = GetSkillData
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(){
    this.firebaseService.getSkills()
  }

}
