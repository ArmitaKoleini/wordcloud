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
    const sizes = ['10', '40', '60', '20', '30'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  // generateRandomNumber() {
  //   return Math.floor(Math.random() * 400);
  // }

  addWord() {
    const element = document.getElementById('random-word');
    if (element) {
      const divElement = document.createElement('span');
      divElement.innerHTML += this.text;
      const randomColor = this.getRandomColor();
      const randomSize = this.getRandomSize();
      divElement.style.color = randomColor;
      divElement.style.fontSize = `${randomSize}px`;
      divElement.style.float = 'left';
      element.appendChild(divElement);
    }
  }

  generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomIndex];

    const element = document.getElementById('random-word');
    if (element) {
      const spanElement = document.createElement('span');
      spanElement.textContent = randomWord.text;
      spanElement.style.fontSize = `${randomWord.score}px`;
      spanElement.style.color = randomWord.color;
      spanElement.style.float = 'left';
      element.appendChild(spanElement);
    }
  }
}
