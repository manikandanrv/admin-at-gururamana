const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://eportal.incometax.gov.in/iec/foservices/#/login', {waitUntil: 'networkidle2'});
await page.pdf({path: 'page.pdf', format: 'A4'});

await browser.close();
})();