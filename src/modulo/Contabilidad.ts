import { Icontable } from "./IContabilidad";

export class Contabilidad  implements  Icontable{
    getBusinessCapital(pasivos: number, activos: number): number {
        return  pasivos+ activos;
    }


}