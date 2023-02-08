export class Empleado{
    constructor(
        public nombre:string
    ){}

    public toString = () : String => {
        return  this.nombre;
    }
}