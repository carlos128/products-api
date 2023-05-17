import { IContabilida } from "./IContabilida";

export class  Contabilida  implements IContabilida{
    getBusinessActivete(pasivo: number, activo: number): number {
        return pasivo + activo;
    }
    
}