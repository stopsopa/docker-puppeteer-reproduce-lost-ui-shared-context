
const puppeteer = require('puppeteer');

const fs = require('fs');

const path = require('path');


const url = 'https://stopsopa.github.io/docker-puppeteer-reproduce-lost-ui-shared-context/';

const file = '/app/app/html.html';

(async() => {

    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
        dumpio: true,
        executablePath: '/usr/bin/google-chrome', // google chrome
    });

    const page = await browser.newPage();

    const scrap = async () => {

        try {

            const html = await page.content();

            fs.appendFileSync(file, html + '');

            process.exit(0);
        }
        catch (e) {

            console.log(`Ultimate stop...`);

            process.exit(1);
        }
    }

    process.on("unhandledRejection", async (reason, p) => {

        process.stdout.write("unhandledRejection: Unhandled Promise Rejection, message: >>>" + JSON.stringify(reason.message)+"<<<\n");

        return await scrap();
    });

    const waitUntil = [
        'load',
        'domcontentloaded',
        'networkidle0',
        'networkidle2',
    ]

    await page.goto(url, { waitUntil });

    await scrap();

})();
