const id = "pamico3332@nic58.com";
const pw = "12345678";
const puppeteer = require("puppeteer");

async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();

    await tab.waitForTimeout(3000);
    let quesLinks = await tab.$$('a[class="backbone block-center"]');
    ques = quesLinks[0];
    let ques1Link = await tab.evaluate( function(elt){ return elt.getAttribute("href"); }, ques );
     ques1Link = "https://www.hackerrank.com" + ques1Link;
    let newTab = await browser.newPage();
    await newTab.goto(ques1Link);
    
    await newTab.waitForTimeout(3000);
    await newTab.click('li[data-tab="moderators"]');
    await newTab.waitForTimeout(3000);
    await newTab.type('input[id="moderator"]',"Kanishk");
    await newTab.waitForTimeout(3000);
    await newTab.keyboard.press("Enter");

    
    // await tab.waitForSelector('li[data-tab="moderators"]',{visible : true});
    // await tab.click('li[data-tab="moderators"]');
    
};
login();