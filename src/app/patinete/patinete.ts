export class Patinete{
    constructor(
        public numero:number,
        public tipo:string,
        public precio_desbloque:number,
        public precio_minuto:number
    ){}

    public toString = () : String => {
        return  this.tipo;
    }
}