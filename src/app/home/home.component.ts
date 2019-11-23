import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import { Leader } from '../shared/leader';
import { DISHES } from '../shared/dishes';

import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  ,
  animations: [
   
   flyInOut(),
   expand()
  ]
})
export class HomeComponent implements OnInit {

  dishes=DISHES;
  dish: Dish;
  promotion: Promotion;
  leader:Leader;
  dishErrMess :string;
  leaderErrMess:string;
  promotionErrMess:string;

  constructor(private dishService: DishService,
    private promotionservice: PromotionService,
    @Inject('baseURL') public baseURL ,
    private leaderService: LeaderService) { }

  ngOnInit() {

    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,  errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion=>{this.promotion=promotion},errmess=>this.promotionErrMess=<any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader=>this.leader=leader,errmess=>this.leaderErrMess=<any>errmess);
  }


}
