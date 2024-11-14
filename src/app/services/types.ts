export interface IBrands {
  codigo: string;
  nome: string;
}

export interface IModel {
  codigo: number;
  nome: string;
}

export interface IModels {
  modelos: IModel[];
}

export interface IYears {
  codigo: string;
  nome: string;
}

export interface IVehicleInfo {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}
