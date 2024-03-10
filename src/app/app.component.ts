import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { IWords } from './word-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordCloudComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wordcloud';
  @ViewChild('wordcloud') wordCloud!: WordCloudComponent;
  text: string = '';

  words: IWords[] = [
    { text: 'HTTP', score: 16, color: 'goldenrod' },
    { text: 'Ember', score: 8, color: 'firebrick' },
    { text: 'Sass', score: 20, color: 'hotpink' },
    { text: 'HTML', score: 32, color: 'coral' },
    { text: 'FlexBox', score: 24, color: 'mediumpurple' },
    { text: 'API', score: 16, color: 'royalblue' },
    { text: 'VueJS', score: 20, color: 'mediumseagreen' },
    { text: 'Grid', score: 24, color: 'gold' },
    { text: 'Rest', score: 12, color: 'darkred' },
    { text: 'JavaScript', score: 36, color: 'cornflowerblue' },
    { text: 'Animation', score: 12, color: 'teal' },
    { text: 'React', score: 28, color: 'royalblue' },
    { text: 'CSS', score: 32, color: 'darkblue' },
    { text: 'Cache', score: 24, color: 'lightgreen' },
    { text: 'Less', score: 12, color: 'mediumpurple' },
  ];


  showAddWord() {
    this.wordCloud.addWord();
  }
}
