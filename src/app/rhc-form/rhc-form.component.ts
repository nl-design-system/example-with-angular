import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormFieldTextInputWebComponent } from '@rijkshuisstijl-community/web-components';

@Component({
  selector: 'example-rhc-form',
  standalone: false,
  templateUrl: './rhc-form.component.html',
  styleUrl: './rhc-form.component.css',
})
export class RhcFormComponent implements OnInit, AfterViewInit {
  @ViewChild('inputEl') inputEl!: ElementRef;
  name = '';
  constructor() {}
  ngOnInit() {
    FormFieldTextInputWebComponent.define();
  }

  ngAfterViewInit() {
    const inputElement: HTMLInputElement = this.inputEl.nativeElement.shadowRoot.querySelector('input');
    console.log('Input Element:', inputElement);

    if (inputElement) {
      inputElement.addEventListener('input', (event: Event) => {
        this.name = (event.target as HTMLInputElement).value;
        console.log('Updated Name:', this.name);
      });
    }
  }
}
