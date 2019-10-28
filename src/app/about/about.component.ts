import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import  {LEADERS} from '../shared/leader';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
dishes=DISHES;
  constructor(private dishService: DishService) { }
    
  leaders:Leader[]=LEADERS;

  ngOnInit() {
    this.dishService.getDishes()
    .then(dishes => this.dishes = dishes);
  }

}
