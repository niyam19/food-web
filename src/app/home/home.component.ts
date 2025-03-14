import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Foods[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fs
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.fs.getAll();
      }
    });
  }
}
