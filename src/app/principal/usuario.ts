export class Usuario{
    constructor(
        public username:string,
        public puntuacion:number,
        public puntos_iniciales:number
        ){}

    public toString = () : String => {
        return  this.username;
    }
}