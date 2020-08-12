const puppeteer = require('puppeteer')

module.exports = getData = value =>{
    return new Promise(async(resolve,reject)=>{
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        const url = "https://www.cronista.com/MercadosOnline/dolar.html"
        await page.goto(url)
        const headers = await page.evaluate(()=> [...document.querySelectorAll('div .numDolar')].map(item => item.innerText))
        browser.close()
        resolve(headers[value])
    })
}