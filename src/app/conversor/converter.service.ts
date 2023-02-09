export class ConverterService {
  converter(category, from, to, value) {
    return this.converters[category][from][to](value);
  }

  converters = {
    temperatura: {
      celsius: {
        kelvin: (celsius: number) => {
          return Number(celsius) + 273.15;
        },

        fahrenheit: (celsius: number) => {
          return (Number(celsius) * 9 / 5) + 32;
        }
      },

      fahrenheit: {
        celsius: (fahrenheit: number) => {
          return (Number(fahrenheit) - 32) * 5 / 9;
        },
        kelvin: (fahrenheit: number) => {
          return (Number(fahrenheit) + 459.67) * 5 / 9;
        }
      },

      kelvin: {
        celsius: (kelvin: number) => {
          return Number(kelvin) - 273.15;
        },
        fahrenheit: (kelvin: number) => {
          return (Number(kelvin) *9 / 5) - 459.67;
        }
      }

    },

    peso: {
      grama: {
        kilo: (grama: number) => {
          return grama / 1000;
        },
        libra: (grama: number) => {
          return grama / 453.59;

        },
        onca: (grama: number) => {
          return grama / 28.35
        }
      },

      kilo: {
        grama: (kilo: number) => {
          return kilo * 1000;
        },
        libra: (kilo: number) => {
          return kilo * 2.20462;
        },
        onca: (kilo: number) => {
          return kilo * 35.274;
        }
      },

      libra: {
        grama: (libra: number) => {
          return libra * 453.59;
        },
        kilo: (libra: number) => {
          return libra / 2.20462;
        },
        onca: (libra: number) => {
          return libra * 16;
        }
      },

      onca: {
        grama: (onca: number) => {
          return onca * 28.35;
        },
        kilo: (onca: number) => {
          return onca / 35.274;
        },
        libra: (onca: number) => {
          return onca / 16;
        }
      },
    },

    medidas: {
      metro: {
        cm: (metro: number) => {
          return metro * 100;
        },
        polegadas: (metro: number) => {
          return metro * 39.37;
        },
        pes: (metro: number) => {
          return metro * 3.281;
        },
        jardas: (metro: number) => {
          return metro * 1.094;
        },
      },

      cm: {
        metro: (cm: number) => {
          return cm / 100;
        },
        polegadas: (cm: number) => {
          return cm / 2.54;
        },
        pes: (cm: number) => {
          return cm / 30.48;
        },
        jardas: (cm: number) => {
          return cm / 91.44;
        },
      },

      polegadas: {
        cm: (polegadas: number) => {
          return polegadas * 2.54;
        },
        metro: (polegadas: number) => {
          return polegadas / 39.37;
        },
        pes: (polegadas: number) => {
          return polegadas / 12;
        },
        jardas: (polegadas: number) => {
          return polegadas / 36;
        },
      },

      pes: {
        cm: (pes: number) => {
          return pes * 30.48;
        },
        polegadas: (pes: number) => {
          return pes * 12;
        },
        metro: (pes: number) => {
          return pes / 3.281;
        },
        jardas: (pes: number) => {
          return pes / 3;
        },
      },

      jardas: {
        cm: (jardas: number) => {
          return jardas * 91.44;
        },
        polegadas: (jardas: number) => {
          return jardas * 36;
        },
        pes: (jardas: number) => {
          return jardas * 3;
        },
        metro: (jardas: number) => {
          return jardas / 1.094;
        },
      },
    },
  }
}
