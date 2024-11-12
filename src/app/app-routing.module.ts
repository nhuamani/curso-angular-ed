import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DatabindingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
