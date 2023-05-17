import { Icontable } from "./IContable";

export class Contabilidad  implements  Icontable{
    getBusinessCapital(pasivos: number, activos: number): number {
        return  pasivos+ activos;
    }


}