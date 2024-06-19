import { IdelNum } from './idle-num';

export interface IIdleNum {

    m: number;
    s: string;

    add: (a: IdelNum, b: IdelNum) => IdelNum;
    sub: (a: IdelNum, b: IdelNum) => IdelNum;
    mul: (a: IdelNum, b: IdelNum) => IdelNum;
    div: (a: IdelNum, b: IdelNum) => IdelNum;
    gt: (a: IdelNum, b: IdelNum) => boolean;
    gte: (a: IdelNum, b: IdelNum) => boolean;
    lt: (a: IdelNum, b: IdelNum) => boolean;
    lte: (a: IdelNum, b: IdelNum) => boolean;
}