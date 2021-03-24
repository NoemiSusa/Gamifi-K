export class Respuesta{
  constructor(
    // resutlado que me vendra del php si es loggeado  o no
    public resultado: boolean,

    // mensaje de error o si ha funcionado
    public msg: string,

    // los datos que sera el id usuario o contraseña usuario
    public datos: any
  ){}
}
