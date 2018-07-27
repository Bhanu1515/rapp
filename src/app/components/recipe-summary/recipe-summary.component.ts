import { Recipe } from './../../model/recipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent{

  constructor() { }
  
  @Input()
  recipe: Recipe;


}
