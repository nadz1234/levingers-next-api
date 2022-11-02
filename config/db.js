const createPool = require("mysql");

const pool = createPool({
    host            : 'sql11.freesqldatabase.com',
    user            : 'sql11525614',
    password        : '9xKG7CAuX5',
    database        : 'sql11525614'
});

pool.getConnection((err) => {
    if(err)
    {
        console.log("Error connection to the database ..")
    }
    console.log("connected");
});

const executeQuery = (query, arraParams) =>{
    return new Promise((resolve,reject) => {
        try{
        pool.query(query, arraParams,(err, data) =>{
            if(err){
                console.log("error");
                reject(err);
            }
            resolve(data);
        });
    }catch (err)
    {
        reject(err);
    }
    });
};

module.exports ={executeQuery};