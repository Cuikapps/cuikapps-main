import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cuik-root',
  templateUrl: './cuik.component.html',
  styleUrls: ['./cuik.component.scss'],
})
export class CuikComponent {
  title = 'cuikapps-main';

  constructor(public router: Router) {}
}
