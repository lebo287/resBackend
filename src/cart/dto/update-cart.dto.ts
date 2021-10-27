import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
    readonly id: string;
    readonly name: string;
    readonly price: string;
    readonly quantity: string;
}
