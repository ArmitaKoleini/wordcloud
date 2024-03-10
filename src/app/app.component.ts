import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { IWords } from './word-interface';
import { FormsModule } from '@angular/forms';
import { WordListComponent } from './word-list/word-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordCloudComponent, WordListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wordcloud';
  @ViewChild('wordcloud') wordCloud!: WordCloudComponent;
  text: string = '';

  words: IWords[] = [
    { text: 'HTTP', score: 16, color: 'gold' },
    { text: 'Ember', score: 8, color: 'aquamarine' },
    { text: 'Sass', score: 20, color: 'olive' },
    { text: 'HTML', score: 32, color: 'lightpink' },
    { text: 'FlexBox', score: 24, color: 'mediumpurple' },
    { text: 'API', score: 16, color: 'aquamarine' },
    { text: 'VueJS', score: 20, color: 'lightblue' },
    { text: 'Grid', score: 24, color: 'gold' },
    { text: 'Rest', score: 12, color: 'crimson' },
    { text: 'JavaScript', score: 36, color: 'hotpink' },
    { text: 'Animation', score: 12, color: 'palegreen' },
    { text: 'React', score: 28, color: 'pink' },
    { text: 'CSS', score: 32, color: 'indigo' },
    { text: 'Cache', score: 24, color: 'palegreen' },
    { text: 'Less', score: 12, color: 'mediumpurple' },
  ];

  showRandomWord() {
    this.wordCloud.generateRandomWord();
  }

  showAddWord() {
    this.wordCloud.addWord();
  }
}
