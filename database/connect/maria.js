const http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mysql=require('mysql');

app.use(bodyParser.urlencoded({extended:false}));

const mariadb=require('mariadb');
const pool=mariadb.createPool({

});