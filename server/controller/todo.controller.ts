import { Request, Response } from 'express';
import { ToDoRecord } from '../records/todo.record';

export async function getHomeData (req: Request, res: Response) {
    const todos = await ToDoRecord.getAllTodos();

    res.send(todos);
}
