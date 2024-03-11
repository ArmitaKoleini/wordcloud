import { WordsService } from './../words.service';
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
  @Input() text: string = '';
  words: IWords[] = [];
  editedUser: string = '';
  indexToEdit: number = 0;
  uniqueIndexCounter: number = 15;

  constructor(private renderer: Renderer2, private WordsService: WordsService) {
    this.words = this.WordsService.words;
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
    this.WordsService.words[this.indexToEdit].text = this.editedUser;
  }

  public onDelete() {
    this.WordsService.words[this.indexToEdit].text = '';
  }
}
