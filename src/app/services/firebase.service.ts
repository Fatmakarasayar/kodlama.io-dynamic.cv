import { GetEducationData } from './../models/getEducationData';
import { Education } from './../models/education';
import { GetExperienceData } from './../models/getExperinceData';
import { Experience } from './../models/experience';
import { GetSkillData } from './../models/getSkillData';
import { Injectable } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { GetUserData } from '../models/getUserData';
import { User } from '../models/user';
import { Skill } from '../models/skill';
import { Social } from '../models/social';
import { GetSocialData } from '../models/getSocialData';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public database: Database) { }

  getUser() {
    const startConfRef = ref(this.database, `user/fatma`);
    onValue(startConfRef, (snapshot) => {
      const data: User = snapshot.val();
      GetUserData.surname = data.surname;
      GetUserData.name = data.name;
      GetUserData.title = data.title;
      GetUserData.mail = data.mail
      GetUserData.phone = data.phone
      GetUserData.about = data.about
      GetUserData.imgUrl = data.imgUrl
    });
  }

  
  getSkills() {
    const startConfRef = ref(this.database, `user/skills`);
    onValue(startConfRef, (snapshot) => {
      const data: Skill[] = snapshot.val();
      for(let i = 0; i < data.length; i++){
        GetSkillData.push(data[i])
      }
    });
  }

  getSocials() {
    const startConfRef = ref(this.database, `user/socials`);
    onValue(startConfRef, (snapshot) => {
      const data: Social[] = snapshot.val();
      for(let i = 0; i < data.length; i++){
        GetSocialData.push(data[i])
      }
    });
  }

  getExperiences() {
    const startConfRef = ref(this.database, `user/experience`);
    onValue(startConfRef, (snapshot) => {
      const data: Experience[] = snapshot.val();
      for(let i = 0; i < data.length; i++){
        GetExperienceData.push(data[i])
      }
    });
  }

  getEducation() {
    const startConfRef = ref(this.database, `user/education`);
    onValue(startConfRef, (snapshot) => {
      const data: Education = snapshot.val();
      GetEducationData.date = data.date;
      GetEducationData.department = data.department;
      GetEducationData.gpa = data.gpa;
      GetEducationData.name = data.name;
    });
  }

}
