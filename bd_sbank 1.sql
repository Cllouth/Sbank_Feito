create database Sbank;
use Sbank;

create table cadastro_conta(
	id int auto_increment primary key not null,
	cpf varchar(14) not null,
	nome varchar(255) not null,
    phone int(15),
    e_mail varchar(255) not null
);

select * from cadastro_conta;