import { Injectable } from '@nestjs/common';
import { CreateBatidaDto } from './dto/create-batida.dto';

@Injectable()
export class BatidasService {
  private dia: string
  private readonly pontos: string[] = []
  private readonly minutosPorDia: number

  getResult() {
    return {
      dia: this.dia,
      pontos: this.pontos
    }
  }

  createBatida(createBatidaDto: CreateBatidaDto) {
    const [dia, ponto] = createBatidaDto.momento.split('T')
    this.dia = dia
    this.pontos.push(ponto)
    return {
      dia: this.dia,
      pontos: this.pontos
    }
  }
}
