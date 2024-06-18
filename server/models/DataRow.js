const mongoose = require('mongoose');


// schema for mongo 
const DataSchema = new mongoose.Schema({
    Customer: String,
    PO_number : Number,
    PO_date: Date,
    SO_number : Number, 
    Unit_Number: Number, 
    Description : String,
    Band: String,
    Wattage : Number,
    Nickname: String,
    Color: String,
    Prefix: String,
    Airborne: String,
    DPAS: String,
    S_N : Number, 
    WO: String,
    QTY: Number, 
    PO_Due: Date,
    AGD_Due: Date,
    ACK_Due: Date,
    Trvlr_Comp_Data: Date,
    Ship_date: Date,
    Ship_date: Date,
    Ship_date: Date,
    Number_late: String,
    Backlog: String,
    Domestic_Foreign: String,
    County: String,
    State: String,
    Sale_price1: Number, 
    Sale_price2: Number, 
    Warr: String,
    WKs_Ship_PO: String,
    Comments: String,
},  { collection: 'Delivery_log' });


const Data = mongoose.model('Delivery_log', DataSchema);


module.exports = Data; 
