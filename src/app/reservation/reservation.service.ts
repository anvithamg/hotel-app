import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];
  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations):[];
  }
  //CRUD
  getReservations() : Reservation[]{
    return this.reservations;
  }
  getReservation(id:string) : Reservation | undefined{
    return this.reservations.find(res=>res.id===id);
  }
  addReservation(newReservation:Reservation):void{
    newReservation.id=Date.now().toString()
    this.reservations.push(newReservation);
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
   
  }
  deleteReservation(id:string){
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }
  updateReservation(reservation:Reservation){
    let index = this.reservations.findIndex(res => res.id == reservation.id)
    this.reservations[index] = reservation;
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

}
