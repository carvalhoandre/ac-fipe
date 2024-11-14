import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrands, IModels, IVehicleInfo, IYears } from './types';

@Injectable({
  providedIn: 'root',
})
export class FipeService {
  private baseUrl = 'https://parallelum.com.br/fipe/api/v1';

  constructor(private http: HttpClient) {}

  getBrands(tipoVeiculo: string): Observable<IBrands[]> {
    return this.http.get<IBrands[]>(`${this.baseUrl}/${tipoVeiculo}/marcas`);
  }

  getModels(tipoVeiculo: string, codigoMarca: string): Observable<IModels> {
    return this.http.get<IModels>(
      `${this.baseUrl}/${tipoVeiculo}/marcas/${codigoMarca}/modelos`
    );
  }

  getYears(
    tipoVeiculo: string,
    codigoMarca: string,
    codigoModelo: string
  ): Observable<IYears[]> {
    return this.http.get<IYears[]>(
      `${this.baseUrl}/${tipoVeiculo}/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`
    );
  }

  getVehicleInfo(
    tipoVeiculo: string,
    codigoMarca: string,
    codigoModelo: string,
    codigoAno: string
  ): Observable<IVehicleInfo> {
    return this.http.get<IVehicleInfo>(
      `${this.baseUrl}/${tipoVeiculo}/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`
    );
  }
}
