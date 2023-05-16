interface IContabilida {
    getBuisinessActivos(pasivos: number, contablida: number): number
}
export class ContabilidaActivos implements  IContabilida {
    getBuisinessActivos(pasivos: number, contablida: number): number {
        return 0;
    }

}
