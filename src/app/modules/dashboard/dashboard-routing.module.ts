import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { StockItemsComponent } from './pages/stock-items/stock-items.component';
import { UsersComponent } from './pages/users/users.component';
import { analyticsResolver } from './services/analytics/analytics.resolver';
import { expensesResolver } from './services/expenses/expenses.resolver';
import { stockItemsResolver } from './services/stock-items/stock-items.resolver';
import { superAdminGuard } from 'src/app/core/guards/super-admin.guard';
import { adminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent,
        resolve: { analytics: analyticsResolver },
      },
      { path: 'companies', component: CompaniesComponent },
      { path: 'departments', component: DepartmentsComponent },
      {
        path: 'expenses',
        component: ExpensesComponent,
        resolve: { expenses: expensesResolver },
      },
      {
        path: 'stock-items',
        component: StockItemsComponent,
        resolve: { expenses: stockItemsResolver },
      },
      { path: 'users', component: UsersComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
