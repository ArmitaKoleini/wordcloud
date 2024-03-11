import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordCloudComponent } from '../word-cloud/word-cloud.component';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  @Input() text: string = '';
  @ViewChild('wordcloud') wordCloud!: WordCloudComponent;

  showAddWord() {
    this.wordCloud.addWord(this.text);
  }
}
