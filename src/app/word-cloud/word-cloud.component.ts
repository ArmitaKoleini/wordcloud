import { WordsService } from './../words.service';
import { Component, Input, ViewChild } from '@angular/core';
import { IWords } from '../word-interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditModeComponent } from '../edit-mode/edit-mode.component';

@Component({
  selector: 'app-word-cloud',
  standalone: true,
  imports: [NgFor, FormsModule, EditModeComponent],
  templateUrl: './word-cloud.component.html',
  styleUrl: './word-cloud.component.css',
})
export class WordCloudComponent {
  @Input() text: string = '';
  words: IWords[] = [];
  @ViewChild('editmode') editMode!: EditModeComponent;

  constructor(private WordsService: WordsService) {
    this.words = this.WordsService.words;
  }

  openModal(index: number) {
    this.editMode.openModal(index);
  }
}
