import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Interfaces/IFeedback';
import { FirestoreService } from '../../services/firestore.service';

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

  constructor(private store: FirestoreService) {}

  submitResponse() {
    if (this.title && this.desc) {
      if (this.app) {
        this.store.create<Feedback>(
          'feedback/title=' + this.title + ' id=' + this.store.genRandID(),
          {
            feedbackType: this.typeSelect,
            app: this.app,
            desc: this.desc,
          },
          false
        );
      } else {
        this.store.create<Feedback>(
          'feedback/title=' + this.title + ' id=' + this.store.genRandID(),
          {
            feedbackType: this.typeSelect,
            app: this.app,
            desc: this.desc,
          },
          false
        );
      }
      alert('Your feedback has been submitted, thank you for the feedback');
    } else {
      alert('Please add a title and description');
    }
  }

  ngOnInit(): void {}
}
