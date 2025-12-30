import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
    public sayPropertyName(){
        return 'My name is Villa'
    }
}
