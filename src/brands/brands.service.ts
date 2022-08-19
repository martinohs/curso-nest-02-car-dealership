import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
 
@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // { id: uuid(),
    //   name:'toyota',
    //   createdAt: 1985
    // },
    // { id: uuid(),
    //   name:'volkswagen',
    //   createdAt: 1959
    // },
    // { id: uuid(),
    //   name:'chevrolet',
    //   createdAt: 1991
    // },
]
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = { //Aca lo uso como si fuera una interfaz, cuando tenga una bd va a ser una instancia de la entidad
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand)
    return `Added brand ${brand}`;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if ( !brand ) throw new NotFoundException (`This action not found a #${id} brand`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne( id );
    this.brands = this.brands.map( brand =>{
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto}
        return brandDB;
      }
      return brand;
    })
    return `This action updates a #${id} brand`;
  }

  remove(id: string) {
    this.brands = this.brands.filter ( brand => brand.id !== id);
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData ( brands: Brand[]){
    this.brands = brands
}

}
