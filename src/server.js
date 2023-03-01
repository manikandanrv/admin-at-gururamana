const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

var browser;
var webPage;

app.get("/login", async (req, res) => {
    const url = req.query.target;
    browser = await puppeteer.launch({
        headless: true
    });
    
    webPage = await browser.newPage();
    

    await webPage.goto(url, {
        waitUntil: 'domcontentloaded',
    });
    await webPage.waitForSelector('#captchaval', {
        visible: true,
      });
    //await webPage.type('input[name=uid]', 'scott');
    //await webPage.type('input[name=password]', 'tiger');
    //await webPage.type('#captchaval', '');
      
    const pdf = await webPage.pdf({
        printBackground: true,
        format: "Letter",
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });

    res.contentType("application/pdf");
    res.send(pdf);
})

app.get("/submit", async (req, res) => {
    const cap = req.query.captcha;
    //const uid = req.query.uid;
    //const pwd = req.query.pwd;
    await webPage.type('#captchaval', cap);
    await webPage.type('input[name=uid]', 'sriramanasramam');
    await webPage.type('input[name=pwd]', 'March@2022');
    await webPage.focus('input[type=button][name=reset]');
    await webPage.keyboard.press('Enter');
    await webPage.waitForNavigation({waitUntil: 'domcontentloaded'})

    const pdf = await webPage.pdf({
        printBackground: true,
        format: "Letter",
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });

   // await browser.close();

    res.contentType("application/pdf");
    res.send(pdf);
})
app.listen(3000, () => {
    console.log("Server started");
});