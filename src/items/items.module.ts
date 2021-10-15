import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsSchema } from './schemas/items.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
