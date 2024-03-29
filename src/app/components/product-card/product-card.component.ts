import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { IProduct } from '../../Interfaces/IProduct';

@Component({
  selector: 'cuik-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() pProduct!: IProduct;

  goTo(url: string): void {
    window.open(url, '_top');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
