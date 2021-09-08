import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private readonly http: HttpClient) {}

  async createFeedback(
    title: string,
    typeSelect: string,
    desc: string,
    app: string
  ): Promise<void> {
    const res = await this.http
      .post(
        environment.apiURL + '/feedback/new',
        {
          title,
          feedbackType: typeSelect,
          desc,
          app,
        },
        { headers: new HttpHeaders() }
      )
      .toPromise();

    console.log(res);
  }
}
