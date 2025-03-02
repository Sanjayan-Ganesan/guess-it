// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const DataModel = require('./Models/Data');


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;


mongoose.connect("mongodb://localhost:27017/Globetrotter"); 
    

app.get('/getData',async (req,res) => {
    DataModel.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Routes
