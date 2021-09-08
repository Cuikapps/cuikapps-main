import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

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

  constructor(private readonly feedback: FeedbackService) {}

  submitResponse(): void {
    if (this.title && this.desc) {
      if (this.typeSelect !== 'other' && !this.app) {
        alert('You must provide value for app field.');
        return;
      }
      this.feedback
        .createFeedback(this.title, this.typeSelect, this.desc, this.app)
        .then(() => {
          alert('Your feedback has been submitted, thank you for the feedback');
        });
    } else {
      alert('Please add a title and description');
    }
  }

  ngOnInit(): void {}
}
