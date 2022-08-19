import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService], //! Aca van nuestros servicios/providers
  exports: [CarsService]
})
export class CarsModule {}
