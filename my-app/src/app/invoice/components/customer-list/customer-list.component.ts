import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../Services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customersList: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  redirect() {
    this.router.navigate(['/invoice/customer-form']);
  }

  ngOnInit() {
    this.getCustomers();
  }

  ngOnDestroy(): void {
    console.log('Exiting');
  }

  deleteCustomer(customer: Customer) {
    //console.log('rodzic ma usunąc:', customer);
    this.customerService
      .removeCustomer(customer)
      .subscribe((data: Customer) => {
        console.log(data);
        this.getCustomers();
      });
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customersList = data;
    });
  }
}
