import { Component, effect, signal } from '@angular/core';
import { UtrechtTextboxAttr } from '@utrecht/component-library-angular';

@Component({
  selector: 'example-utrecht-form',
  templateUrl: './utrecht-form.component.html',
  styleUrl: './utrecht-form.component.css',
  standalone: false,
})
export class UtrechtFormComponent {
  inputValue = signal('');

  constructor() {
    effect(() => {
      console.log(this.inputValue());
    });
  }

  onSubmitHandler(inputEl: UtrechtTextboxAttr) {
    console.log(inputEl);
  }
}
