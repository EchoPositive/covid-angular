import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './components/states/states.component';
import { StateInfoComponent } from './components/state-info/state-info.component'


const routes: Routes = [
  {path: '', component: StatesComponent},
  { path:'stateInfo/:stateId', component: StateInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
