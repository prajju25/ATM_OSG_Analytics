import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cardNo: number;
  pin: number;
  errors: Array<string> = [];
  
  constructor(private router: Router, private serv: SharedService) { }

  submit(authForm: NgForm){
    console.log(authForm);
    //auth Validation not done
    let numberLen = this.cardNo.toString().length;
    let pinLen = this.pin.toString().length;
    this.errors = []
    if(numberLen != 16){
      numberLen > 16 ? this.errors.push("CardNumber Length greater than 16") : this.errors.push("CardNumber Length lesser than 16");   
    } 
    if(pinLen != 4){
      pinLen > 4 ? this.errors.push("PIN Length greater than 4") : this.errors.push("PIN Length lesser than 4");   
    }
    if(this.errors.length ==0){
      this.router.navigate(['/amount']);
    }
  }

}
