import { Controller, Get, Post, Put, Delete, Param, Query, Body, BadRequestException, ValidationPipe } from '@nestjs/common';
import { CreateBatidaDto } from './dto/create-batida.dto';
import { UpdateBatidaDto } from './dto/update-batida.dto';
import { BatidasService } from './batidas.service';

@Controller('batidas')
export class BatidasController {
    constructor(private readonly batidasService: BatidasService) {}

    @Get()
    getBatidas() {
        return this.batidasService.getResult()
    }

    @Get(':id')
    getOneBatida(@Param('id') id: string) {
        return { id }
    }

    @Post()
    createBatida(@Body(new ValidationPipe()) createBatidaDto: CreateBatidaDto) {
        try {
            return this.batidasService.createBatida(createBatidaDto)
        }
        catch (err) {
            throw new BadRequestException('Something bad happened')
        }
    }

    @Put(':id')
    updateBatida(@Param('id') id: string, @Body() updateBatidaDto: UpdateBatidaDto) {
        return { 
            id,
            momento: updateBatidaDto
        }
    }

    @Delete(':id')
    removeBatida(@Param('id') id: string) {
        return { id }
    }
}
