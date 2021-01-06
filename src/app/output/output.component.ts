import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  amount: number;
  notes = [2000,500,200,100,50,20,10,5,2,1];
  map = [];
  constructor(private router: Router, private serv: SharedService) { }

  ngOnInit(): void {
    this.amount = this.serv.fetchAmount();
    if(this.amount == null){
      this.router.navigate(['/auth']);
    } else {
      for(let key of this.notes){
        let rem = Math.floor((this.amount*1) / (key*1));
        if(rem > 0){
          let obj = {
            'rupees': key,
            'count': rem
          }
          this.map.push(obj);
          this.amount -= (rem*key);
        }
      }
      console.log(this.map);
    }
  }

  cancel(){
    this.router.navigate(['/amount']);
  }

}
