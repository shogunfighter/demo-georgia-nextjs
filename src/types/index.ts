export type TBatches = {
    model: string;
    date: string | Date;
    licenseLevel: number;
    quantity: number;
    comment?: string;
}

export type TMachineNumbers = {
    serial_number: string;
}