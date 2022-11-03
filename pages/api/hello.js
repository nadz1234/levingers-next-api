// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'sql11.freesqldatabase.com',
  user            : 'sql11525614',
  password        : '9xKG7CAuX5',
  database        : 'sql11525614'

})


export default function handler(req, res) {

  pool.getConnection((err,connection) => {

    if(err) throw err
    console.log('connected as id')-

    connection.query('SELECT * FROM orders WHERE price = ?',[req.params.price],(err,rows)=> {
       connection.release()

       if(!err)
       {
           res.send(rows)
       }
       else
       {
           console.log(err)
       }
    })
})

  //res.status(200).json({ name: 'John Doe' })
}
