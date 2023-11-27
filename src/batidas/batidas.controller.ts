import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateBatidaDto } from './dto/create-batida.dto';
import { UpdateBatidaDto } from './dto/update-batida.dto';

@Controller('batidas')
export class BatidasController {
    @Get()
    getBatidas(@Query('type') type: string) {
        return [{ type }]
    }

    @Get(':id')
    getOneBatida(@Param('id') id: string) {
        return { id }
    }

    @Post()
    createBatida(@Body() createBatidaDto: CreateBatidaDto) {
        return {
            momento: createBatidaDto.momento
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
