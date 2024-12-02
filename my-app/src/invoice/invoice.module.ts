import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class InvoiceModule { }
