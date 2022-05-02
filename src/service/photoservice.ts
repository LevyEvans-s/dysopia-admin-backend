import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Photo } from "../model/photoModel";
import { Repository } from "typeorm";
import { PhotoInterface } from "../interface/photo";

@Provide()
export class PhotoService {

  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>

  //插入数据库
  async savePhoto(schema:PhotoInterface) {
    let photo = new Photo();
    photo.name = schema.name;
    photo.description = schema.description;
    photo.filename = schema.filename;
    photo.views = schema.views;
    photo.isPublished = schema.isPublished;

    const photoResult = await this.photoModel.save(photo);

    return photoResult;
  }

  //查询数据库
  async findPhotos() {
    //let allPhotos = await this.photoModel.find({})
    let firstPhoto = await this.photoModel.findOne({
      where: {
        id: 4
      }
    })
    return firstPhoto
  }

  //更新数据库
  async updatePhoto() {
    let photoToUpdate = await this.photoModel.findOne({
      where: {
        id:1
      }
    })
    photoToUpdate.name = "Me,my friends and polar bears"
    const photoResult=await this.photoModel.save(photoToUpdate)
    return {
      "code": 20001,
      "msg": "更新数据库成功",
      "schema":photoResult
    }
  }

  //删除数据库
  async delPhoto(id:number) {
    let photoToRemove = await this.photoModel.findOne({
      where: {
        id
      }
    })
    const removeResult = await this.photoModel.remove(photoToRemove)
    return {
      "code":20002,
      "msg":"删除数据成功",
      "schema":removeResult
    }
  }
}