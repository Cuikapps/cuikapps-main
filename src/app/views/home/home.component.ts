import { Component, OnInit } from '@angular/core';
import { products } from '../../data/product.json';
import { IProduct } from '../../Interfaces/IProduct';

@Component({
  selector: 'cuik-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = products;

  constructor() {}

  ngOnInit(): void {}
}
