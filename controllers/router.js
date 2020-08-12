const express = require('express')
const router = express.Router()
const onResponse = require('../services/response')
const getData = require('../services/search')

router.get('/api', (req,res)=>{
    getData(
        req.query.c
    )
    .then(data => onResponse(res, data))
    .catch(err=>onResponse(res,err))
})

router.get('/help', (req,res)=>{
    onResponse(res, {
        use: "/api?c= <value>",
        dolar_oficial_BN: {
            compra: 0,
            venta: 1
        },
        dolar_blue: {
            compra: 2,
            venta: 3
        },
        dolar_solidario: 4,
        dolar_mayorista: {
            compra: 5,
            venta: 6
        },
        dolar_mep_contado: {
            compra: 7,
            venta: 8
        },
        dolar_cdo_liqui:{
            compra: 9,
            venta:10
        }
    })
})

module.exports = router