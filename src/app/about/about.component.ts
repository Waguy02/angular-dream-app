import { Component, OnInit,Inject } from '@angular/core';
import {Leader} from '../shared/leader';
import  {LEADERS} from '../shared/leader';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import{LeaderService} from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  ,
  animations: [
   
   flyInOut(),
   expand() 
  ]
})
export class AboutComponent implements OnInit {
dishes=DISHES;
leaderErrMess:string;
  constructor(private leaderService: LeaderService,@Inject('baseURL') public baseURL ,) { }
    
  leaders:Leader[];

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders=>this.leaders=leaders,errmess=>this.leaderErrMess=<any>errmess);
  }

}
