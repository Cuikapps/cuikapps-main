import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  @Input() rHeight!: string;
  @Input() rWidth!: string;

  constructor() {}

  ngOnInit(): void {}
}
