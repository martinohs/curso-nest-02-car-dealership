import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars') //Aca va el path que apunta al controller
// @UsePipes( ValidationPipe ) //>> Nivel globaal del controlador, aplica el validationpipe a todas las funciones
export class CarsController {

  constructor(
   private readonly carsService: CarsService,
  ){}


  @Get() //Decorador para indicar el tipo de solicitud del endpoint
  getAllCars() {
    return this.carsService.getAllCars();
  }


  //* Los pipes son metodos que nos permiten transformar un tipo de dato en otro, en este caso, hago que la id pase a ser un numero (int), hay muchos tipos.
  //* tambien controla que si se mandan letras de error (es decir, pueden pasarse numeros como string pero no letras)
  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe) id:string ){ //! Por defecto cualquier valor que venga como parametro se recibe como string
    const car = this.carsService.findByid(id);
    return {id, car};
  }


  //*@Body me trae directamente el body de la request en cualquiera de los formatos (form, xraw, json, etc)
  @Post()
  // @UsePipes(ValidationPipe) //>> Nivel controlador
  createCar(@Body() createCarDto: CreateCarDto){
    
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id',new ParseUUIDPipe({version: '4'})) id:string,
    @Body() updateCarDto: UpdateCarDto
  ) {
        return this.carsService.update(updateCarDto, id);
      }

  @Delete(':id')
  // deleteCar(@Param('id', ParseIntPipe) id:number){ //>> Lo dejo de ejemplo de como se usaba el pipe
  deleteCar(@Param('id',ParseUUIDPipe) id:string){
    return this.carsService.delete(id);
  }
}
