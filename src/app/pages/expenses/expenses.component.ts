import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  @Output() totalExpense: EventEmitter<any> = new EventEmitter();

  expenseForm: FormGroup;
  expenseList = [];

  constructor(private fb: FormBuilder,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      amount: [0, [Validators.required]],
      reason: ['', [Validators.required]],
    });
  }

  add() {
    this.expenseList.push(this.expenseForm.value);
    this.totalExpense.emit(this.expenseForm.value.amount);
    this.expenseForm.reset();
  }

  deleteExpense(expense) {
    this.expenseList = [...this.expenseList.filter(x => x.reason !== expense.reason)];
    this.totalExpense.emit({value: expense.amount});
  }

}
