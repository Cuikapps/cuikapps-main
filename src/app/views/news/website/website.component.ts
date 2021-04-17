import { Component, OnInit } from '@angular/core';
import { changelogs } from '../../../data/changelogs.json';
import { IChangeLogs } from '../../../Interfaces/IChangeLog';

@Component({
  selector: 'cuik-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  constructor() {}

  website: IChangeLogs = changelogs.website;

  // Gets the latest version number.
  currentVersion: string = this.website[0].title.split(',')[1];

  ngOnInit(): void {}
}
