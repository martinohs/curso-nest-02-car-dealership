//>> DTO = DATA TRANSFER OBJECT

import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto{
// Solo permito las propiedades del modelo
// dado a que usualmente no hay que cambiar las propiedades luego de que fue instanciado
// Uso una clase para poder realizar validaciones de la data (con interfaces no se podria)
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString() //Con esto hago que tambien controle que los nombres de las variables sean los mismos
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?:string;

}