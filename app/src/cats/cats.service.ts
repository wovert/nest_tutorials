import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService implements NestMiddleware {
  private readonly cats: Cat[] = [];

  // use(req: Request, res: Response, next: Function) {
  //   console.log('Request...');
  //   next();
  // }
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    const test: string = 'cats all';
    return test;
  }
}
