import { Component, OnInit ,Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';
import { FormsModule } from '@angular/forms';

import { flyInOut } from '../animations/app.animation';


 @Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:[   flyInOut()]
})


export class MenuComponent implements OnInit {
  

  dishes:Dish[];
 
  errMess: string;


  constructor(private dishService: DishService, @Inject('baseURL') public baseURL)  { }
  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,   errmess => this.errMess = <any>errmess);
  }






  
}
