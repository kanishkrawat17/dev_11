const puppeteer = require("puppeteer");

async function openRail(){
    let browser = await puppeteer.launch({headless : false });
    let page = await browser.newPage();
    await page.goto("https://www.easemytrip.com/railways/");

}
openRail();


