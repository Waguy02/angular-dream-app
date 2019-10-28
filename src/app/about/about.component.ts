import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import  {LEADERS} from '../shared/leader';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import{LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
dishes=DISHES;
  constructor(private leaderService: LeaderService) { }
    
  leaders:Leader[];

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders=>this.leaders=leaders);
  }

}
