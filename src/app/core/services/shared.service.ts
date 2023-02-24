import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  incomeList: any = [];
  incomeListSubject = new BehaviorSubject([]);
  incomeListObs$ = this.incomeListSubject.asObservable();

  expenseList: any = [];
  expenseListSubject = new BehaviorSubject([]);
  expenseListObs$ = this.expenseListSubject.asObservable();

  constructor() { }

  addIncome(value) {
    this.incomeList.push(value);
    this.incomeListSubject.next(this.incomeList);
  }

  addExpense(value) {
    this.expenseList.push(value);
    this.expenseListSubject.next(this.incomeList);
  }

  deleteIncome(value) {
    const index = this.incomeList.findIndex(income => income.reason === value.reason);
    delete this.incomeList[index];
    this.incomeListSubject.next(this.incomeList);
  }

  deleteExpense(value) {
    const index = this.expenseList.findIndex(expense => expense.reason === value.reason);
    delete this.expenseList[index];
    this.expenseListSubject.next(this.expenseList);
  }
}
