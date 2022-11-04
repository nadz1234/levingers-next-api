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
    console.log('connected as id')
    const params = req.body

    connection.query('INSERT INTO user_information set ?',params,(err,rows)=> {
       connection.release()

       if(!err)
       {
           res.send(`users with param ${params} has been added`)
       }
       else
       {
           console.log(err)
       }
    })
})

  //res.status(200).json({ name: 'John Doe' })
}
