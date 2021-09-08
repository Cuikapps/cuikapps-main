import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsURLs } from '../EApiUrls';
import { IChangeLog } from '../Interfaces/IChangeLog';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private readonly http: HttpClient) {}

  async get(name: string): Promise<IChangeLog[]> {
    switch (name) {
      case 'main': {
        return await this.http
          .get<IChangeLog[]>(environment.apiURL + NewsURLs.MAIN, {
            headers: new HttpHeaders(),
          })
          .toPromise();
      }
      case 'website': {
        return await this.http
          .get<IChangeLog[]>(environment.apiURL + NewsURLs.WEBSITE, {
            headers: new HttpHeaders(),
          })
          .toPromise();
      }
      case 'cuik-convertor': {
        return await this.http
          .get<IChangeLog[]>(environment.apiURL + NewsURLs.CUIK_CONVERTOR, {
            headers: new HttpHeaders(),
          })
          .toPromise();
      }
      case 'apptray': {
        return await this.http
          .get<IChangeLog[]>(environment.apiURL + NewsURLs.APPTRAY, {
            headers: new HttpHeaders(),
          })
          .toPromise();
      }
    }
    return [{ title: 'Error', changes: ['Could not load news'] }];
  }
}
