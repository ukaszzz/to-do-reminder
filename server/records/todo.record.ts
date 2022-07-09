import { pool } from '../utils/db';
import { FieldPacket } from 'mysql2';


export class ToDoRecord {
    static async getAllTodos () {
        const task = await pool.execute(`SELECT name as 'taskName' FROM toDoList`)
    }
}
