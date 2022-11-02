import pool, { executeQuery } from "../config/db";

const getAllUsers = async (req,res) => {
    let userData = await executeQuery('SELECT * FROM orders',[]);
    res.send(userData);
}

export{getAllUsers};