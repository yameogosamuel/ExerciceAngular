import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


dishes: Dish[4] = DISHES;

selectedDish: Dish;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }
    onSelect(dish: Dish) {
      this.selectedDish = dish;
    }
}
