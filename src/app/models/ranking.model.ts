export class Ranking {
  map(arg0: (value: Ranking) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public idRanking?: number,
    public nombreRanking?: string,
    public nickProfesorRK?: string,
    public fechaInicio?: string,
    public codigoAcceso?: number,
    public fechaFinal?: string
  ) { }

}


