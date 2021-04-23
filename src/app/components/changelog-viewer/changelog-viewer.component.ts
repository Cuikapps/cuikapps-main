import { Component, Input, OnInit } from '@angular/core';
import { IChangeLogs } from '../../Interfaces/IChangeLog';

@Component({
  selector: 'cuik-changelog-viewer',
  templateUrl: './changelog-viewer.component.html',
  styleUrls: ['./changelog-viewer.component.scss'],
})
export class ChangelogViewerComponent implements OnInit {
  constructor() {}

  @Input() changelogs!: IChangeLogs;

  ngOnInit(): void {}
}
