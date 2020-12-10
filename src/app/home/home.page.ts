import { Component, OnInit } from '@angular/core';
import { Diary } from '../shared/Diary';
import {DiaryService} from './../shared/diary.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 splash = true;
  tabBarElement: any;
  Bookings = [];
  constructor( private aptService: DiaryService) {
    
  }


  ngOnInit(){

    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Diary);
      })
    })
  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }


  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Desea eliminar?')) {
      this.aptService.deleteBooking(id)
    }
  }
  

}
