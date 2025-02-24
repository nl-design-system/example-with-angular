import { Component, effect, OnInit } from '@angular/core';
import { FormFieldTextInputWebComponent } from '@rijkshuisstijl-community/web-components';

@Component({
  selector: 'example-rhc-form',
  standalone: false,
  templateUrl: './rhc-form.component.html',
  styleUrl: './rhc-form.component.css',
})
export class RhcFormComponent implements OnInit {
  name = '';
  constructor() {
    effect(() => {
      console.log(this.name);
    });
  }
  ngOnInit() {
    FormFieldTextInputWebComponent.define();
  }
}
