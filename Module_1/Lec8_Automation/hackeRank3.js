const puppeteer = require("puppeteer");
const id = "sasig30991@geekale.com";
const pw = "123456";
let tab;
let idx;
let gCode;

// puppeteer has promisfied functions

// by default headless = true

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    console.log("browser is opened !");
    return browser.pages();
  })
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
  })
  .then(function () {
    return tab.type("#input-1", id);
  })
  .then(function () {
    return tab.type("#input-2", pw);
  })
  .then(function () {
    return tab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    ); // login hojata hai click se
  })
  .then(function () {
    return waitAndClick("#base-card-1-link");
  })
  .then(function () {
    return waitAndClick('a[data-attr1="warmup"]');
  })
  .then(function () {
    return tab.waitForSelector(".js-track-click.challenge-list-item", {
      visible: true,
    });
  })
  .then(function () {
    // tab.$() // document.querySelector;
    return tab.$$(".js-track-click.challenge-list-item"); // it will run document.querySelectorAll in the browser and gives you array of all the elements
  })
  .then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = oneATag.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  })
  .then(function(allQuesLinks){
    let oneQuesSolvePromise = solveQuestion(allQuesLinks[0]);
    return oneQuesSolvePromise;   
  })
  .then(function(){

  })
  .catch(function(err){
    console.log(err);
  });

  function getCode(){
    return new Promise(function(scb , fcb){
      let waitPromise = tab.waitForSelector(".hackdown-content h3" , {visible:true});
      waitPromise.then(function(){
        return tab.$$(".hackdown-content h3");
      })
      .then(function(allCodeNamesElement){
        // [<h3>C++</h3> , <h3>Python</h3> , <h3>Java</h3> ]
        let allCodeNamesPromise = [];

        for(let i=0 ; i<allCodeNamesElement.length ; i++){
          let codeNamePromise = tab.evaluate( function(elem){  return elem.textContent;   }  , allCodeNamesElement[i]  );
          allCodeNamesPromise.push(codeNamePromise);
        }
        // allCodeNamesPromise = [Promise<data> , Promise<data> , Promise<data> ];
        let combinedPromise = Promise.all( allCodeNamesPromise );
        // Promise<Pending> => Promise< [data,data,data] >
        return combinedPromise;
      })
      .then(function(allCodeNames){
        // [C++ , Python , Java];
        for(let i= 0 ;i<allCodeNames.length ; i++){
          if(allCodeNames[i] == "C++"){
            idx = i;
            break;
          }
        }
        return tab.$$(".hackdown-content .highlight"); // document.querySelectorAll
      })
      .then(function(allCodeDiv){
        // [<div></div> , <div></div> , <div></div>];
        let codeDiv = allCodeDiv[idx];
        return tab.evaluate(function(elem){ return elem.textContent;   }  , codeDiv);
      })
      .then(function(code){
        gCode = code;
        //console.log(gCode);// it will show undefined
        scb();
      })
      .catch(function(error){
        fcb(error);
      })
    })
  }

  function solveQuestion(quesLink){
    return new Promise( function(scb , fcb){
      let gotoPromise = tab.goto("https://www.hackerrank.com"+quesLink);
      gotoPromise.then(function(){
       return waitAndClick('a[id="tab-1-item-4"]');
      })
      .then(function(){
        return getCode();
      })
      .then(function(){
        console.log("Got C++ code succesfully !!");
        console.log(gCode);
      })
      .catch(function(error){
        fcb(error);
      })
    });
  }


function waitAndClick(selector) {
  return new Promise(function (scb, fcb) {
    let waitPromise = tab.waitForSelector(selector, { visible: true });
    waitPromise
      .then(function () {
        return tab.click(selector);
      })
      .then(function () {
        scb();
      })
      .catch(function () {
        fcb();
      });
  });
}