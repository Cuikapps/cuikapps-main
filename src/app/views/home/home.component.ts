import { Component, OnInit } from '@angular/core';
import { products } from '../../../data/product.json';
import { IProduct } from '../../Interfaces/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageTypes: string[] = ['Home'];

  products: IProduct[] = products;

  constructor() {}

  ngOnInit(): void {}
}
