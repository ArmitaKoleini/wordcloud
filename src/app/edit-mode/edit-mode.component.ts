import { FormsModule } from '@angular/forms';
import { WordsService } from './../words.service';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-edit-mode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-mode.component.html',
  styleUrl: './edit-mode.component.css',
})
export class EditModeComponent {
  editedUser: string = '';
  indexToEdit: number = 0;
  uniqueIndexCounter: number = 15;
  constructor(
    private renderer: Renderer2,
    private WordsService: WordsService
  ) {}
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
