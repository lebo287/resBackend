import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
    readonly id: string;
    readonly name: string;
    readonly info: string;
    readonly price: string;
    readonly img: string;
}
