const connection = require('../config/db');
const dotenv = require('dotenv'). config();

async function storeTask(req,res) {
    const params = Array(
        req.body.cpf,
        req.body.nome,
        req.body.phone,
        req.body.email
    );

    const query = "INSERT INTO cadastro_conta(cpf,nome,phone,e_mail) VALUES(?,?,?,?)";

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        if(results) {
            res
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            res
            .status(400)
            .json({
                success: false,
                message: "Ops, deu problema!",
                data: err
            })
        }
    })
}

module.exports = {
    storeTask
}