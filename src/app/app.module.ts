import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { DisplayBudgetComponent } from './pages/display-budget/display-budget.component';
import { AllIncomeComponent } from './pages/all-income/all-income.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DisplayBudgetComponent,
    AllIncomeComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
