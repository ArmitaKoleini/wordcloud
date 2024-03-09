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
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#607d8b',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  addWord() {
    const element = document.getElementById('random-word');
    if (element) {
      const divElement = document.createElement('span');
      divElement.innerHTML += this.text;
      const randomColor = this.getRandomColor()
      divElement.style.color = randomColor ;
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
      element.appendChild(spanElement);
    }
  }
}
