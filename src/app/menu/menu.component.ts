import { Component, OnInit ,Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';
import { FormsModule } from '@angular/forms';




 @Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  

  dishes:Dish[];
 
  errMess: string;


  constructor(private dishService: DishService, @Inject('baseURL') private baseURL)  { }
  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,   errmess => this.errMess = <any>errmess);
  }






  
}

