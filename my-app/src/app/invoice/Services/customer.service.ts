import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  private customersList: Customer[] = [];
  private baseUrl: string = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(this.baseUrl)
      .pipe(
        map((customers: Customer[]) =>
          customers.map((customer) => new Customer().deseralize(customer))
        )
      );
  }

  removeCustomer(customer: Customer): Observable<Customer> {
    console.log('rodzic ma usunąc:', customer);
    const header: HttpHeaders = new HttpHeaders({
      CorrelationId: '121212',
    });
    return this.httpClient.delete<Customer>(this.baseUrl + '/' + customer.id, {
      headers: header,
    });

    /*this.customersList = this.customersList.filter((x: Customer) => {
      return x.nip !== customer.nip;
    });
    return this.customersList;*/
  }
}
