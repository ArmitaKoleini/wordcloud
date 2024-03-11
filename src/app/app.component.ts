import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ControlComponent } from './control/control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordCloudComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wordcloud';
  text: string = '';
}
