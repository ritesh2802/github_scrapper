const request = require("request");
const cheerio = require("cheerio");

let { jsPDF } = require("jspdf");
const fs= require("fs");


function getTopIssue(url){
    request(url,cb);
}

function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else{
        getTopIssueLink(body);
    }
}

function getTopIssueLink(html){
    const selecTool = cheerio.load(html);

    let topIssueArr=selecTool(`a[data-hovercard-type="issue"]`);

    for(let i=0;i<topIssueArr.length;i++){
        let relLinkTopIssue = selecTool(topIssueArr[i]).attr("href");
        let fullLink="https://github.com"+relLinkTopIssue;
        console.log(fullLink);

    }
}

module.exports={
    getTopIssue:getTopIssue,
}