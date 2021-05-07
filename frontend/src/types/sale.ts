// Definimos um tipo para fazer a primeira requisição com a
// API que construimos com String Boot.
export type SaleSum = {
    sallerName: string;
    sum: number;
}

export type SaleSuccess = {
    sallerName: string;
    visited: number;
    deals: number;
}