import { HttpException, HttpStatus } from "@nestjs/common";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { extname } from 'path';
import { Request } from "express";
import { existsSync, mkdirSync } from "fs";


export const multerOptions : MulterOptions = {
    limits:{
        fileSize: 5242880,
    },
    fileFilter(
        req: Request,
        file: Express.Multer.File,
        done: (error:Error,acceptFile:boolean) => void,
    ){
        console.log(file.mimetype);
        if(file.mimetype == "image/png") {
            done(null,true);
        } else {
            done(
                new HttpException(
                    `Unsupported file type ${extname(file.originalname)}`,
                    HttpStatus.BAD_REQUEST,
                ),
                false
            );
        }
    },
    storage: diskStorage({
        destination(
            Request: Request,
            file: Express.Multer.File,
            done: (error: Error | null,filename: string) => void,
        ){
            const uploadPath = './uploads/temp';

            if(!existsSync(uploadPath)){
                mkdirSync(uploadPath)
            }

            done(null,uploadPath);
        },
        filename(
            Request: Request,
            file: Express.Multer.File,
            done: (error: Error | null,filename: string) => void,
        ){
            const fileName = `${Date.now()}-${file.originalname}`;
            done(null,fileName);
        },
    }),
};
