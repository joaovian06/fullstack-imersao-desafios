import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [PrismaModule, RoutesModule],
  controllers: [AppController, RoutesController],
  providers: [AppService, RoutesService],
})
export class AppModule {}
