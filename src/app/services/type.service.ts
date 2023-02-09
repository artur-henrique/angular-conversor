import { TypeOfCalc } from "../interfaces/type";
import { Temp } from '../enums/temp';
import { Peso } from '../enums/peso';
import { Medidas } from '../enums/medidas';


export class TypeService {
  typeList: TypeOfCalc[] = [
    {
      category: 'Temperatura',
      list: [ Temp.celsius, Temp.kelvin, Temp.fahrenheit ]
    },
    {
      category: 'Peso',
      list: [ Peso.grama, Peso.kilo, Peso.libra, Peso.onca ]
    },
    {
      category: 'Medidas',
      list: [ Medidas.metro, Medidas.cm, Medidas.polegadas, Medidas.pes, Medidas.jardas ]
    },
  ]

  getTypeList() {
    return this.typeList;
  }
}
