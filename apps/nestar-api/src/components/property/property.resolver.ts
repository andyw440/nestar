import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';


@Resolver()
export class PropertyResolver {
    constructor(private readonly propertyService:PropertyService){}

    

}
