import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
   private router: Router) { }

  ngOnInit() {
  }

  getHeaderColor() {
    if (this.router.url.includes('/cart')) {
        return 'cart';
    } else if (this.router.url.includes('/shipping')){
        return 'shipping';
    } else if (this.router.url.includes('/products/')){
        return 'products';
    } else {
        return 'home';
    }
}

}