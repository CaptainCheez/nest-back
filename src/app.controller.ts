import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('public/:imgId')
  openImage(@Param('imgId') imgId, @Res() res): string {
    return res.sendFile(imgId, {root: 'public'});
  }
}
