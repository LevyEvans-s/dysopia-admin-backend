import { MidwayConfig } from '@midwayjs/core';

export default {
  orm: {
    type: 'mysql',
    host: 'rm-uf66g7zoe8dtsr3ivwo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'root',
    password: 'Mysql05111017',
    database: 'test',
    synchronize: true,
    logging: false
  }
} as MidwayConfig;
