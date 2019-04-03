const puppeteer = require('puppeteer');
const imagesToPdf = require("images-to-pdf")

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 5960, height: 4209})
    await page.goto('http://stackoverflow.com', {waitUntil: 'networkidle2'});
    await timeout(10000)
    await page.screenshot({path: 'example.png'});
    // await page.pdf({path: 'example.pdf', format: 'A4'});

    console.log("please wait 1- 10 minutes")

    window.setInterval(function () {
        console.log("processing...")

    },5000)

    await imagesToPdf(["example.png"], "example.pdf")
    browser.close();

})();