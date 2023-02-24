import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-budget',
  templateUrl: './display-budget.component.html',
  styleUrls: ['./display-budget.component.scss']
})
export class DisplayBudgetComponent implements OnInit {

  budgetLeft: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  totalIncome(event) {
    this.budgetLeft = typeof event !== 'object' ? this.budgetLeft + event : this.budgetLeft - event.value;
  }

  totalExpense(event) {
    this.budgetLeft = typeof event !== 'object' ? this.budgetLeft - event : this.budgetLeft + event.value;
  }

}
