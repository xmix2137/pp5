class Invoice {
    name: string = "";
    quantity: number = 0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}
