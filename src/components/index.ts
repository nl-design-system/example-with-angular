import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleStoryComponent } from './story/component';

const components = [ExampleStoryComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
  providers: [],
})
export class ExampleComponentsModule {}
