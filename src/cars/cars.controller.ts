import { Controller, Get } from '@nestjs/common';

@Controller('cars') //Aca va el path que apunta al controller
export class CarsController {
  @Get() //Decorador para indicar el tipo de solicitud del endpoint
  getAllCars() {
    return ['Toyota', 'Honda', 'Jeep'];
  }
}
