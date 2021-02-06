import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Feedback } from 'src/Interfaces/IFeedback';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {
  title!: string;
  typeSelect = 'issue';
  app!: string;
  desc!: string;

  constructor(private firetore: AngularFirestore) {}

  feedbackCollection: AngularFirestoreCollection<Feedback> = this.firetore.collection(
    'feedback'
  );

  submitResponse() {
    if (this.app) {
      this.feedbackCollection.add({
        title: this.title,
        feedbackType: this.typeSelect,
        app: this.app,
        desc: this.desc,
      });
    } else {
      this.feedbackCollection.add({
        title: this.title,
        feedbackType: this.typeSelect,
        app: '',
        desc: this.desc,
      });
    }
  }

  ngOnInit(): void {}
}
