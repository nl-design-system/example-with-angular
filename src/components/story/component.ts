import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'example-story',
  templateUrl: 'index.html',
  styleUrls: ['index.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleStoryComponent {
  @Input() name = '';
  @HostBinding('attr.role') role = 'presentation';
  constructor() {}
}
