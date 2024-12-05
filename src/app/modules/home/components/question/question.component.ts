import { Component, input, Input } from '@angular/core';
import { INewsItem } from '../../../core/interfaces/news-item.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() title!: string;
  @Input() source!: string;
  @Input() content!: string;
  @Input() url!: string;
}
