import { Provide, Inject,Controller,Body, Get, Post, Put, Del } from "@midwayjs/decorator";
import { Context } from '@midwayjs/faas';
import { PhotoService } from "../service/photoservice";
import { PhotoInterface } from "../interface/photo";

@Provide()
@Controller('/photo')
export class PhotoController {
  @Inject()
  ctx: Context;

  @Inject()
  photoService: PhotoService
  

  @Post('/')
  async InsertPhoto(@Body('schema') schema:PhotoInterface) {
    this.ctx.body=await this.photoService.savePhoto(schema);
  }

  @Get('/')
  async findPhoto() {
    this.ctx.body=await this.photoService.findPhotos()
  }

  @Put('/')
  async updatePhoto() {
    this.ctx.body=await this.photoService.updatePhoto()
  }

  @Del('/')
  async delPhoto(@Body('id') id:number) {
    this.ctx.body=await this.photoService.delPhoto(id)
  }
}