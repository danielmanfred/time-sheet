import { PartialType } from '@nestjs/mapped-types'
import { CreateBatidaDto } from "./create-batida.dto";

export class UpdateBatidaDto extends PartialType 
(CreateBatidaDto) {
}
