export class Usuario{
    constructor(
        public usuario:string,
        public puntuacion:number,
        public puntos_iniciales:number
        ){}

    public toString = () : String => {
        return  this.usuario;
    }
}