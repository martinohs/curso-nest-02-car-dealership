import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.interface';
import { v4 as uuid } from 'uuid'
import { relative } from 'node:path/posix';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
//>> Todo servicio es es un provider, no todos los providers son servicios.
//>> Los providers son clases que se pueden inyectar, porque no todos poseen logica de negocio (me sirve insertarlos), los providers los utilizaremos cuando necesitemos 
//>> inyectar dependencias, es decir, un servicio.
@Injectable() //Decorador que nos indica que se puede inyectar.
export class CarsService {

    private cars: Car[] = [
        {   id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {   id:uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {   id:uuid(),
            brand: 'Gol',
            model: 'Trend'
        },

    ]

    public getAllCars() {
        return this.cars;
    }

    public findByid(id: string){

        const car = this.cars.find(car => car.id === id);

        if ( !car ) throw new NotFoundException(`Car with id '${id}' not found`);
    
        return car;
    }

    public create( createCarDto: CreateCarDto){
        if (!createCarDto) throw new NotFoundException('The car info is empty');
        
        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);

        return newCar;
    }

    public update ( updateCarDto: UpdateCarDto, id: string){
        if (!updateCarDto) throw new NotFoundException('The car is empty');

        if ( updateCarDto.id && updateCarDto !== id ) throw new BadRequestException(`Error, diference between id's`)

        let carToUpdate = this.findByid(id);

        this.cars = this.cars.map( car => {
            if (car.id === id ){
                carToUpdate = {
                    ...carToUpdate, //spreed operator
                    ...updateCarDto,
                    id,
                }

                return carToUpdate;
            }

            return car;
        })

        return carToUpdate;
        
    }

    public delete ( id:string) {
        this.cars = this.cars.filter(car => car.id !== id);

        return this.cars
    }

}
