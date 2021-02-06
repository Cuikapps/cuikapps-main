import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-nav-preset',
  templateUrl: './nav-preset.component.html',
  styleUrls: ['./nav-preset.component.scss'],
})
export class NavPresetComponent implements OnInit, AfterViewInit {
  @Input() pageActive!: string;

  constructor() {}

  @ViewChild('navList') navList!: HTMLUListElement;

  navToggleClass: string = '';

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  toggleNav(e: boolean) {
    if (!e) {
      this.navToggleClass = 'nav-open';
    } else {
      this.navToggleClass = 'nav-close';
    }
  }
}
