import { Component } from '@angular/core';
import { Recipe } from '../..//model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  
  constructor() {
    this.recipes = [
      new Recipe("Matar Paneer Masala", "Talk about veg recipes of India and the first thing that comes to the mind is paneer. The wide use of cottage cheese in Indian kitchen tells how much people love to gorge on it. This Matar Paneer Masala recipe, with a host of spices will leave you asking for more.",
        null, null, null),
      new Recipe("Beguni Recipe", "This Bengali veg recipe of India is super healthy and delicious. It is just the perfect way of eating brinjal for those who don't really like this veggie. It also makes for a street food in most parts in West Bengal. All you need is besan, brinjal, ginger paste, green chilies and khus khus to make this amazing recipe.",
        null, null, null),
      new Recipe("Nuggekai Pulimunchi Recipei", "This veg recipe of India is prepared with chilies and tamarind and makes for a yummy curry. It is generally eaten with rice, Kerala paratha or even with neer dosa.",
        null, null, null)
    ];
  }

}
