import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Feedback } from 'src/app/Interfaces/IFeedback';

@Component({
  selector: 'cuik-feedback-card',
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
    if (this.title || this.desc || this.app) {
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
      alert('Your feedback has been submitted');
    } else {
      alert('Please add a title or description');
    }
  }

  ngOnInit(): void {}
}
