import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import {DiaryService} from './../shared/diary.service';
import { Diary } from '../shared/Diary';
import {Platform} from '@ionic/angular'



@Component({
  selector: 'app-make-diary',
  templateUrl: './make-diary.page.html',
  styleUrls: ['./make-diary.page.scss'],
})
export class MakeDiaryPage implements OnInit {
  bookingForm: FormGroup;
  
  constructor(
    private DiaryService: DiaryService,
    private router: Router,
    public fb: FormBuilder,
    private platform:Platform
  ) { 
    
  }

  ngOnInit() {

    this.bookingForm=this.fb.group({
      name:[''],
      mobile:[''],
      date:[''],
      address:[''],
      email:[''],
      description:['']
    })
  }
    formSubmit(){
      if(!this.bookingForm.valid){
        return false;
      }else{
        this.DiaryService.createBooking(this.bookingForm.value).then(res=>{
         console.log(res);
         this.bookingForm.reset();
         this.router.navigate(['/home']);

        })
        .catch(error=>console.log(error));
      
    }
  }

  

}

