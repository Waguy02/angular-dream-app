import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import { Leader } from '../shared/leader';
import { DISHES } from '../shared/dishes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes=DISHES;
  dish: Dish;
  promotion: Promotion;
  leader:Leader;

  constructor(private dishService: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {

    this.dishService.getDishes()
    .then(dishes => this.dishes = dishes);
  

    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader=this.leaderService.getFeaturedLeader();
  }


}