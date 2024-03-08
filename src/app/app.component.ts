import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WordCloudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wordcloud';
}
