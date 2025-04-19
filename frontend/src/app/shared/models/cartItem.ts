import { Foods } from './food';

export class CartItem {
  food: Foods;
  quantity: number = 1;

  constructor(food: Foods) {
    this.food = food;
    this.getPrice();
  }
  
  getPrice(): number {
    return this.food.price * this.quantity;
  }
}
