import { Car } from "src/cars/cars.interface"; //las interfaces pueden definirse fuera de sus modulos
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
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