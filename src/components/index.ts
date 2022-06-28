import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleStory } from './story/component';

const components = [ExampleStory];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
  providers: [],
})
export class ExampleComponentsModule {}
