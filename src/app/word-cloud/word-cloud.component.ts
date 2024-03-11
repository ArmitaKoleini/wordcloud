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
  uniqueIndexCounter: number = 15;

  constructor(private renderer: Renderer2) {}

  getRandomColor(): string {
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

  getRandomSize(): string {
    const sizes = ['16', '32', '8', '24', '40'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  addWord(text: string) {
    const wordObject = {
      text,
      score: +this.getRandomSize(),
      color: this.getRandomColor(),
    };
    this.words.push(wordObject);
  }

  public openModal(index: number) {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'block');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'block');
    this.indexToEdit = index;
    this.editedUser = '';
  }
  public closeModal() {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'none');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'none');
  }

  public onEdit() {
    this.words[this.indexToEdit].text = this.editedUser;
  }

  onDelete() {
    this.words[this.indexToEdit].text = '';
  }
}
