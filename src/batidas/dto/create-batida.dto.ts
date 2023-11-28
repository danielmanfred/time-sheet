import { MinLength } from "class-validator";

export class CreateBatidaDto {
    @MinLength(18)
    momento: string
}