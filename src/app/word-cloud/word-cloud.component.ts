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

  addWord() {
    const divElement = document.getElementById('random-word');
    if (divElement) {
      divElement.innerHTML += this.text;
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
