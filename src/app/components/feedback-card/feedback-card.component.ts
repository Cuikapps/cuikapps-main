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

  feedbackCollection: AngularFirestoreCollection<any> = this.firetore.collection(
    'feedback'
  );

  submitResponse() {
    if (this.title && this.desc) {
      if (this.app) {
        this.feedbackCollection.doc(this.title).set({
          feedbackType: this.typeSelect,
          app: this.app,
          desc: this.desc,
        });
      } else {
        this.feedbackCollection.doc(this.title).set({
          feedbackType: this.typeSelect,
          app: '',
          desc: this.desc,
        });
      }
      alert('Your feedback has been submitted');
    } else {
      alert('Please add a title and description');
    }
  }

  ngOnInit(): void {}
}
