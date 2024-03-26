import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  id?: string;

  constructor(private route: ActivatedRoute) { }

  //Lektion, test this before commiting.
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = String(params.get('id'));
    })
  }
}