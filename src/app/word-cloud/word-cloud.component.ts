import { Component, Input } from '@angular/core';
import { IWords } from '../word-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-word-cloud',
  standalone: true,
  imports: [NgFor],
  templateUrl: './word-cloud.component.html',
  styleUrl: './word-cloud.component.css',
})
export class WordCloudComponent {
  @Input() words: IWords[] = [];
  @Input() text: string = '';

  getRandomColor(): string {
    const colors = [
      'aquamarine',
      'mediumpurple',
      'lightblue',
      'crimson',
      'hotpink',
      'palegreen',
      'indigo',
      'lightpink',
      'gold',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  getRandomSize(): string {
    const sizes = ['16', '32', '8', '24', '40'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  createRandomizedSpanElement(text: string) {
    const spanElement = document.createElement('span');
    spanElement.textContent = text;
    spanElement.style.cssText = `font-size: ${this.getRandomSize()}px; color: ${this.getRandomColor()}; float: left;`;
    return spanElement;
  }

  addWord() {
    const element = document.getElementById('random-word');
    if (element) {
      element.appendChild(this.createRandomizedSpanElement(this.text));
    }
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words.splice(randomIndex, 1)[0];
  }

  generateRandomWord() {
    const randomWord = this.getRandomWord();
    const element = document.getElementById('random-word');
    if (element) {
      const spanElement = document.createElement('span');
      spanElement.textContent = randomWord.text;
      spanElement.style.cssText = `font-size: ${randomWord.score}px; color: ${randomWord.color}; float: left;`;
      element.appendChild(spanElement);
    }
  }
}
