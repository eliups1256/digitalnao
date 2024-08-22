console.log("Hola Afirme Seguros")


let cotizacion: number;
let cobertura = 20;
let prima: number = 123.456;
let poliza: bigint = 9007199254740991n;

enum polizaEstatus {
    EnProceso,
    Terminada,
    Cancelada
}


let estado: any = 10;

estado = 19;      // ID
estado = 'Nuevo Leon';   // texto

let municipio: unknown = 10;
municipio = 19001;
municipio = 'Monterrey';


let contacto: number | String;



let nombre: string = "Afirme Seguros";
contacto = 8114140667;
let mensaje: string = `La poliza  de ${nombre} es ` + poliza + " y se encuentra con estatus " + polizaEstatus.Terminada 
+ " y fue generada en " + municipio + " ," + estado + " " + contacto;

console.log(mensaje)