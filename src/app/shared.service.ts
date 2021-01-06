import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  amount: number;
  saveAmount(amount: number) {
    this.amount = amount;
  }

  fetchAmount(){
    return this.amount;
  }

  constructor() { }
}
