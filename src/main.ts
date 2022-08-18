import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* Configuro mis pipes a nivel aplicacion, puedo poner todos los que quieras usando la sig. sintaxis
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //White list solo deja la data que yo estoy esperando y eseta declarada en el DTO. desestima el resto
      forbidNonWhitelisted: true, //Con este devuelvo un mensaje de error mas exacto en cuanto a los campos que estan de mas y bloqueo si hay props de mas
    })
  )

  await app.listen(3000);
  console.log('Server is runing in port 3000');
}
bootstrap();
