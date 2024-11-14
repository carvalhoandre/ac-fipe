import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IBrands, IModel, IVehicleInfo, IYears } from '../../services/types';
import { FipeService } from '../../services/fipeService';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class FormComponent {
  vehicleType: string | null = null;
  codeBrand: string | null = null;
  codeModel: string | null = null;
  codeYear: string | null = null;

  brands: IBrands[] = [];
  models: IModel[] = [];
  years: IYears[] = [];
  vehicleInfo: IVehicleInfo | null = null;

  constructor(private fipeService: FipeService) {}

  get hasBasicInformations(): boolean {
    return !!(
      this.vehicleType &&
      this.codeBrand &&
      this.codeModel &&
      this.codeYear
    );
  }

  resetSelections(targetField: 'codeBrand' | 'codeModel' | 'codeYear') {
    switch (targetField) {
      case 'codeBrand':
        this.codeBrand = null;
        this.codeModel = null;
        this.codeYear = null;
        this.models = [];
        this.years = [];
        this.vehicleInfo = null;
        break;
      case 'codeModel':
        this.codeModel = null;
        this.codeYear = null;
        this.years = [];
        this.vehicleInfo = null;
        break;
      case 'codeYear':
        this.codeYear = null;
        this.vehicleInfo = null;
        break;
    }
  }

  onVehicleTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.vehicleType = target.value;

    this.resetSelections('codeBrand');

    if (this.vehicleType) {
      this.fipeService.getBrands(this.vehicleType).subscribe({
        next: (data) => (this.brands = data),
      });
    }
  }

  onBrandChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedBrand = target.value;

    this.codeBrand = selectedBrand;
    this.resetSelections('codeModel');

    if (this.vehicleType && this.codeBrand) {
      this.fipeService.getModels(this.vehicleType, this.codeBrand).subscribe({
        next: (data) => (this.models = data.modelos),
      });
    }
  }

  onModelChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedModel = target.value;
    this.codeModel = selectedModel;
    this.resetSelections('codeYear');

    if (this.vehicleType && this.codeBrand && this.codeModel) {
      this.fipeService
        .getYears(this.vehicleType, this.codeBrand, this.codeModel)
        .subscribe({
          next: (data) => (this.years = data),
        });
    }
  }

  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.codeYear = target.value;
    this.fetchVehicleInfo();
  }

  fetchVehicleInfo() {
    if (this.hasBasicInformations) {
      this.fipeService
        .getVehicleInfo(
          this.vehicleType!,
          this.codeBrand!,
          this.codeModel!,
          this.codeYear!
        )
        .subscribe({
          next: (data) => {
            this.vehicleInfo = data;
          },
        });
    }
  }
}
