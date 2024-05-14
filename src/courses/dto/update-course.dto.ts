import { PartialType } from "@nestjs/mapped-types";
import { createCourseDTO } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(createCourseDTO){

}