import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../Services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {

  }


  onSubmitForm(){
    console.log('zawartość service', this.customer); 
    let result = this.customerService.addCustomer(this.customer);
    console.log(result);
    // this.router.navigate(['/invoice/components/customer-form/customer-form.component.html'])
    this.router.navigate(['/invoice/customer-list']);
//     this.router.navigate(['/invoice/customer/list']);


  }

}


