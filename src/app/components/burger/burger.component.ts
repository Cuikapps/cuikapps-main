import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent implements OnInit {
  @Output() openNavEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  navToggle = true;

  constructor() {}

  openNav() {
    this.navToggle = !this.navToggle;
    this.openNavEmitter.emit(this.navToggle);
  }

  ngOnInit(): void {}
}
