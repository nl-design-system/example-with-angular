/* Since we provide a definition for a third-party web component, we must no use our own component prefix */
/* tslint:disable:component-selector */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'nl-theme-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ThemeSwitcherComponent {
  constructor(c: ChangeDetectorRef) {
    c.detach();
  }
}
