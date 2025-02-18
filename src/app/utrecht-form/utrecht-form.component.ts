import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { type UtrechtTextboxAttr } from '@utrecht/component-library-angular';

@Component({
  selector: 'example-utrecht-form',
  templateUrl: './utrecht-form.component.html',
  styleUrl: './utrecht-form.component.css',
  standalone: false,
})
export class UtrechtFormComponent {
  inputValue = signal('');

  @ViewChild('input') input!: ElementRef<UtrechtTextboxAttr>;

  constructor() {
    effect(() => {
      console.log(this.inputValue());
    });
  }

  onSubmitHandler() {
    console.log(this.input);
  }
}
