const request = require("request");
const cheerio  = require("cheerio");
const {getTopIssue} = require("./topIssueLink");

function getIssue(url){
    request(url,cb);
  
}
function cb(err,res,body){
        if(err){
            console.log(err);
        }
        else{
            getIssueBtn(body);
        }
}

function getIssueBtn(html){
    const selecTool = cheerio.load(html);
    // let topIssueArr = selecTool(`a[data-hovercard-type="issue"]`);
    let IssueBtn= selecTool(`a[id="issues-tab"]`);
    let relLinkIssueBtn= IssueBtn.attr("href");
    // yaha IssueBtn ko dobara selecTool me kyu wrap kr rhe koi jarurat ni h iski 
    let fullLink = "https://github.com"+relLinkIssueBtn;
    // console.log(fullLink);
    getTopIssue(fullLink);
    

}

module.exports={
    getIssue : getIssue,
}