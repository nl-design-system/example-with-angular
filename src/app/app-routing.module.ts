import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UtrechtFormComponent } from './utrecht-form/utrecht-form.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route
  { path: 'utrecht-form', component: UtrechtFormComponent },
  { path: 'protected', component: ProtectedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
