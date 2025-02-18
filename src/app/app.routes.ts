import { ProtectedComponent } from './protected/protected.component';
import { UtrechtFormComponent } from './utrecht-form/utrecht-form.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'protected', component: ProtectedComponent },
  { path: 'utrecht-form', component: UtrechtFormComponent },
];
