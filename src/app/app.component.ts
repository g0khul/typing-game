import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sentence = lorem.sentence();
  enteredText = '';

  getSentence() {
    return this.sentence;
  }

  onInputChange(event: Event) {
    const eventValue = event.target as HTMLInputElement;
    this.enteredText = eventValue.value;
  }

  isGameOver() {
    console.log(
      'called is game over----------------',
      this.sentence === this.enteredText
    );
    return this.sentence === this.enteredText;
  }
}
