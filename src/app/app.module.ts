import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { TableAssignmentComponent } from './table-assignment/table-assignment.component';
import { OrderByPipe } from './table-assignment/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormAssignmentComponent,
    TableAssignmentComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
