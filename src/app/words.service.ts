import { Injectable } from '@angular/core';
import { IWords } from './word-interface';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
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

  public getRandomColor(): string {
    const colors = [
      'mediumpurple',
      'lightgreen',
      'darkblue',
      'royalblue',
      'teal',
      'cornflowerblue',
      'darkred',
      'mediumseagreen',
      'coral',
      'firebrick',
      'hotpink',
      'goldenrod',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  public getRandomSize(): string {
    const sizes = ['16', '32', '8', '24', '40'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  public addWord(text: string) {
    const wordObject = {
      text,
      score: +this.getRandomSize(),
      color: this.getRandomColor(),
    };
    this.words.push(wordObject);
  }
}
