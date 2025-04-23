export interface CreateTableUseCase {
    execute: (option: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(

    ){}

    execute({base, limit = 10}: CreateTableOptions) {
        const headerMessage = `
        =======================
        ||  Tabla del ${base}      ||
        =======================\n`;
        
let outputMessage = '';
let aux = ''; 
let aux2 = ''; 
let t=7;

        for (let i = 1; i <= limit; i++) {
            aux =  `        |    ${base} x ${i} = ${ base * i}`;
        
            let lugares = t -(aux.length - 22);
            let s = ' '.repeat(lugares)
            outputMessage   += `        ||   ${base} x ${i} = ${ base * i}` +s+ `||\n`;
        }
        return headerMessage + outputMessage + '        =======================\n';
    }
}