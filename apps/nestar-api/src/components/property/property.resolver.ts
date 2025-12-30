import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { PropertyService } from './property.service';


@Resolver()
export class PropertyResolver {
    constructor(private readonly propertyService:PropertyService){}

    @Query(() => String)
    public async sayPropertyName(){
        return this.propertyService.sayPropertyName()
    }
}
