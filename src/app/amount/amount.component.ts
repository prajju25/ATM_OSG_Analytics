import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent {

  amount:number;
  msg: Array<string> = [];

  constructor(private route: Router, private serv: SharedService) { }

  submit(form: NgForm){
    this.msg = [];
    if(this.amount > 0){
      this.serv.saveAmount(this.amount);
      this.route.navigate(['/output']);
    } else {
      this.msg.push("Enter correct amount");
    }
  }
  cancel(){
    this.route.navigate(['/auth'])
  }
}
