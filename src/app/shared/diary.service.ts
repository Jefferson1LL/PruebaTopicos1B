import { Injectable } from '@angular/core';
import { Diary } from '../shared/Diary';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  bookingListenRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;


  constructor(private db: AngularFireDatabase) { }

  createBooking(apt:Diary){
    return this.bookingListenRef.push({
      name: apt.name,
      mobile: apt.mobile,
      date: apt.date,
      address: apt.address,
      email: apt.email,
      description: apt.description
    })
  }

  getBooking(id: string){
    this.bookingRef=this.db.object('/diary/'+id);
    return this.bookingRef;
  }


  //obtener varios
  getBookingList(){
    this.bookingListenRef=this.db.list('/diary');
    return this.bookingListenRef;
  }

  updateBooking(id, apt:Diary){
    return this.bookingRef.update({
      name: apt.name,
      mobile: apt.mobile,
      date: apt.date,
      address: apt.address,
      email: apt.email,
      description: apt.description
    })
  }

  deleteBooking(id:string){
    this.bookingRef=this.db.object('/diary/'+id);
    this.bookingRef.remove();
  }
  
}

