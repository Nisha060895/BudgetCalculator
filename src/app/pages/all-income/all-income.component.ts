import { SharedService } from './../../core/services/shared.service';
import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-income',
  templateUrl: './all-income.component.html',
  styleUrls: ['./all-income.component.scss']
})
export class AllIncomeComponent implements OnInit {

  @Output() totalIncome: EventEmitter<any> = new EventEmitter();

  incomeForm: FormGroup;
  incomesList = [];

  show: boolean = false;

  constructor(private fb: FormBuilder,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      amount: [0, [Validators.required]],
      reason: ['', [Validators.required]],
    });
  }

  add() {
    this.incomesList.push(this.incomeForm.value);
    this.totalIncome.emit(this.incomeForm.value.amount);
    this.incomeForm.reset();
  }

  deleteIncome(income) {
    this.incomesList = [...this.incomesList.filter(x => x.reason !== income.reason)];
    this.totalIncome.emit({value: income.amount});
  }
}
