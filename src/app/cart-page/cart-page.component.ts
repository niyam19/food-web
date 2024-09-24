import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService){
    this.setCart();
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(quantityInString: string, cartItem: CartItem){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity, cartItem.food.id);
    
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}
