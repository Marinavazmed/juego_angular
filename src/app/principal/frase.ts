export class Frase{
    constructor(
        public frase:string,
        public pista_inicial:string,
        ){}

    public toString = () : String => {
        return  this.frase;
    }
}