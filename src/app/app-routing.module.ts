import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { TableAssignmentComponent } from './table-assignment/table-assignment.component';

const appRoutes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'form', component: FormAssignmentComponent },
  { path: 'table', component: TableAssignmentComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
