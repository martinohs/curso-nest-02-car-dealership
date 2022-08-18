//>> DTO = DATA TRANSFER OBJECT

import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
// Solo permito las propiedades del modelo
// dado a que usualmente no hay que cambiar las propiedades luego de que fue instanciado
// Uso una clase para poder realizar validaciones de la data (con interfaces no se podria)

    @IsString() //Con esto hago que tambien controle que los nombres de las variables sean los mismos
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model:string;

}