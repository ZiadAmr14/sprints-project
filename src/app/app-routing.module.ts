import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddPlaceComponent } from './add-place/add-place.component';

const routes: Routes = [
  { path: "add_place", component: AddPlaceComponent },
  { path: "auth", component: AuthComponent },
  { path: "**", component: NotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
