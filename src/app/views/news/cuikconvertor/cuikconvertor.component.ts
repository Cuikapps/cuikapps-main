import { Component, OnInit } from '@angular/core';
import { changelogs } from '../../../data/changelogs.json';
import { IChangeLogs } from '../../../Interfaces/IChangeLog';

@Component({
  selector: 'cuik-cuikconvertor',
  templateUrl: './cuikconvertor.component.html',
  styleUrls: ['./cuikconvertor.component.scss'],
})
export class CuikconvertorComponent implements OnInit {
  constructor() {}

  cuikConvertor: IChangeLogs = changelogs['cuik-convertor'];

  //Gets the latest version number
  currentVersion: string = this.cuikConvertor[0].title.split(',')[1];

  ngOnInit(): void {}
}
