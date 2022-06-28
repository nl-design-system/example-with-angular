import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-story',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.role]': 'presentation',
  },
})
export class ExampleStory {
  @Input() name = '';
  constructor() {}
}
