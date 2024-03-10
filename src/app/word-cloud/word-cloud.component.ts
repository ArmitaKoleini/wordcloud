import { Component, Input, Renderer2 } from '@angular/core';
import { IWords } from '../word-interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-cloud',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './word-cloud.component.html',
  styleUrl: './word-cloud.component.css',
})
export class WordCloudComponent {
  @Input() words: IWords[] = [];
  @Input() text: string = '';
  editedUser: string = '';
  indexToEdit: number = 0;

  constructor(private renderer: Renderer2) {}

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
    const spanElement = this.renderer.createElement('span');
    this.renderer.addClass(spanElement, 'word');
    this.renderer.setProperty(spanElement, 'textContent', text);
    this.renderer.setStyle(
      spanElement,
      'font-size',
      `${this.getRandomSize()}px`
    );
    this.renderer.setStyle(spanElement, 'color', this.getRandomColor());
    this.renderer.setStyle(spanElement, 'float', 'left');
    this.renderer.setProperty(spanElement, 'click', this.openModal.bind(this));
    return spanElement;
  }

  addWord() {
    const element = document.getElementById('random-word');
    if (element) {
      const spanElement = this.createRandomizedSpanElement(this.text);
      element.appendChild(spanElement);
    }
  }

  public openModal(index: number) {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'block');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'block');
    this.indexToEdit = index;
  }
  public closeModal() {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'none');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'none');
  }

  public onEdit() {
    this.words[this.indexToEdit].text = this.editedUser;
    this.editedUser = '';
  }
}
