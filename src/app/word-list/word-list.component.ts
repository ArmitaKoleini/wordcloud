import { Component, Input } from '@angular/core';
import { IWords } from '../word-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent {
  @Input() words: IWords[] = [];

}
