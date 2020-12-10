import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DiaryService } from './../shared/diary.service';

@Component({
  selector: 'app-edit-diary',
  templateUrl: './edit-diary.page.html',
  styleUrls: ['./edit-diary.page.scss'],
})

export class EditDiaryPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: DiaryService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      mobile: [''],
      date: [''],
      description: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}