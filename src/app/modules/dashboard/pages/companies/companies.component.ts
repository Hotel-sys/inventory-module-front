import { Component, inject, OnInit, signal } from '@angular/core';
import { StockItemsService } from '../../services/stock-items/stock-items.service';
import { Company } from '../../models/company';
import { CompaniesService } from '../../services/companies/companies.service';
import { CompaniesListComponent } from '../../components/companies/companies-list/companies-list.component';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { CompaniesFormComponent } from '../../components/companies/companies-form/companies-form.component';

@Component({
  selector: 'app-companies',
  imports: [CompaniesListComponent, UbButtonDirective, UbDialogTriggerDirective, CompaniesFormComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent implements OnInit {
  private httpClient = inject(CompaniesService);
  public companies = signal<Company[]>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): any {
    this.isLoading.set(true);

    return this.httpClient.getAll().subscribe({
      complete: () => {
        this.isLoading.set(false);
      },
      next: (data) => {
        this.companies.set(data);
      },
    });
  }
}
