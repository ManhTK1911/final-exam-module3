import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeListComponent} from './awesome-list/awesome-list.component';
import {AwesomeAddComponent} from './awesome-add/awesome-add.component';
import {AwesomeEditComponent} from './awesome-edit/awesome-edit.component';


const routes: Routes = [
  {
    path: '',
    component: AwesomeListComponent,
  },
  {
    path: 'awesome-add',
    component: AwesomeAddComponent,
  },
  {
    path: 'edit-awesome',
    component: AwesomeEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
