export class Alumno{
    public id: number;
    public name: string;
    public apellido: string;
    public ciudad: string;

    constructor(id:number,
        name:string,
        apellido:string,
        ciudad:string){
            this.apellido=apellido;
            this.ciudad=ciudad;
            this.id=id;
            this.name=name;
        }


}