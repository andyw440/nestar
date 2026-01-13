import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema from '../../schemas/Comment.model';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:"Comment",
                schema:CommentSchema,
            }
        ]),
    ]
})
export class CommentModule {}
