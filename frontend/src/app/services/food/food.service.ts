import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 10 },
      // { name: 'Indian', count: 10 },
      { name: 'Snack', count: 3 },
      { name: 'StreetFood', count: 2 },
      { name: 'FastFood', count: 3 },
      { name: 'SouthIndian', count: 2 },
    ];
  }
  
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Samosa',
        price: 50,
        cookTime: '5-10',
        favourite: true,
        origins: ['India'],
        stars: 4.7,
        imageUrl: '/assets/food1.jpg',
        tags: ['Indian', 'Snack'],
      },
      {
        id: 2,
        name: 'Pav Bhaji',
        price: 120,
        cookTime: '20-25',
        favourite: true,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food2.jpg',
        tags: ['Indian', 'StreetFood', 'FastFood'],
      },
      {
        id: 3,
        name: 'Sada Dosa',
        price: 80,
        cookTime: '15-20',
        favourite: true,
        origins: ['South India'],
        stars: 4.6,
        imageUrl: '/assets/food3.jpg',
        tags: ['Indian', 'SouthIndian'],
      },
      {
        id: 4,
        name: 'Chole Bhature',
        price: 100,
        cookTime: '20-30',
        favourite: true,
        origins: ['India'],
        stars: 4.8,
        imageUrl: '/assets/food4.jpg',
        tags: ['Indian', 'FastFood'],
      },
      {
        id: 5,
        name: 'Vada Pav',
        price: 40,
        cookTime: '10-15',
        favourite: false,
        origins: ['India'],
        stars: 4.2,
        imageUrl: '/assets/food5.jpg',
        tags: ['Indian', 'StreetFood'],
      },
      {
        id: 6,
        name: 'Paneer Tikka',
        price: 150,
        cookTime: '20-25',
        favourite: true,
        origins: ['India'],
        stars: 4.9,
        imageUrl: '/assets/food6.jpg',
        tags: ['Indian', 'Snack'],
      },
      {
        id: 7,
        name: 'Masala Dosa',
        price: 100,
        cookTime: '15-20',
        favourite: true,
        origins: ['South India'],
        stars: 4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['Indian', 'SouthIndian'],
      },
      {
        id: 8,
        name: 'Rajma Chawal',
        price: 130,
        cookTime: '25-30',
        favourite: false,
        origins: ['India'],
        stars: 4.4,
        imageUrl: '/assets/food8.jpg',
        tags: ['Indian'],
      },
      {
        id: 9,
        name: 'Pani Puri',
        price: 30,
        cookTime: '5-10',
        favourite: true,
        origins: ['India'],
        stars: 4.6,
        imageUrl: '/assets/food9.png',
        tags: ['Indian', 'Snack'],
      },
      {
        id: 10,
        name: 'Aloo Paratha',
        price: 60,
        cookTime: '10-15',
        favourite: true,
        origins: ['India'],
        stars: 4.3,
        imageUrl: '/assets/food10.jpg',
        tags: ['Indian', 'FastFood'],
      },
    ];
  }
  

  // getAllTag(): Tag[]{
  //   return[
  //     { name: 'All', count: 14},
  //     { name: 'FastFood', count: 14},
  //     { name: 'Italian', count: 14},
  //     { name: 'Japanese', count: 14},
  //     { name: 'Seafood', count: 14},
  //   ]
  // }

  // getAll(): Foods[] {
  //   return [
  //     {
  //       id: 1,
  //       name: 'Pizza',
  //       price: 150,
  //       cookTime: '20-25',
  //       favourite: true,
  //       origins: ['Italy', 'NewYork'],
  //       stars: 4.5,
  //       imageUrl: '/assets/food1.jpg',
  //       tags: ['Italian', 'FastFood'],
  //     },
  //     {
  //       id: 2,
  //       name: 'Sushi',
  //       price: 200,
  //       cookTime: '30-35',
  //       favourite: true,
  //       origins: ['Japan', 'China'],
  //       stars: 4.8,
  //       imageUrl: '/assets/food2.jpg',
  //       tags: ['Japanese', 'Seafood'],
  //     },
  //     {
  //       id: 3,
  //       name: 'Taco',
  //       price: 120,
  //       cookTime: '15-20',
  //       favourite: false,
  //       origins: ['Mexico', 'Brazil'],
  //       stars: 4.2,
  //       imageUrl: '/assets/food3.jpg',
  //       tags: ['Mexican', 'StreetFood'],
  //     },
  //     {
  //       id: 4,
  //       name: 'Burger',
  //       price: 100,
  //       cookTime: '10-15',
  //       favourite: true,
  //       origins: ['USA', 'Europe'],
  //       stars: 4.0,
  //       imageUrl: '/assets/food4.jpg',
  //       tags: ['American', 'FastFood'],
  //     },
  //     {
  //       id: 5,
  //       name: 'Samosa',
  //       price: 50,
  //       cookTime: '5-10',
  //       favourite: false,
  //       origins: ['India', 'Nepal'],
  //       stars: 4.7,
  //       imageUrl: '/assets/food5.jpg',
  //       tags: ['Indian', 'Snack'],
  //     },
  //   ];
  // }
}
