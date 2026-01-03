import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import type { ObjectId } from "mongoose";
import { MemberAuthType, MemberStatus, MemberType } from "../../enums/member.enum";
import { ViewGroup } from "../../enums/view.enum";
import { IsNotEmpty } from "class-validator";

@InputType()

export class ViewInput {
    @IsNotEmpty()
    @Field(() => String)
    memberId:ObjectId;

     @IsNotEmpty()
    @Field(() => String)
    viewRefId:ObjectId;

     @IsNotEmpty()
    @Field(() => ViewGroup)
    viewGroup:ViewGroup;
}