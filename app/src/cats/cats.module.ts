import { Module } from '@nestjs/common';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 导出
})
export class CatsModule {}
