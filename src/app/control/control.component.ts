import { WordsService } from './../words.service';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  @Input() text: string = '';

  constructor(private WordsService: WordsService) {}

  showAddWord() {
    this.WordsService.addWord(this.text);
    this.text = '';
  }
}
