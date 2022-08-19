// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
// //mapped-types nos ayuda a extender un dto basado en otro dto con excepcion de que todas las propiedades del dt del cual estoy extendiendo sean opcionales
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto{
    @IsString()
    @MinLength(1)
    name:string;
}