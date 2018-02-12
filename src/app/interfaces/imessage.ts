import { IBody } from "./ibody";

export interface IMessage
{
    name: string,
    priority: number,
    body: IBody,
}