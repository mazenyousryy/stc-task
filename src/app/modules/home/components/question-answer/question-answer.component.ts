import { Component, Input } from '@angular/core';
import { INewsItem } from '../../../core/interfaces/news-item.interface';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss',
})
export class QuestionAnswerComponent {
  @Input() content!: string;
  @Input() url!: string;
  @Input() source!: string;
  @Input() title!: string;
}
