const cheerio = require("cheerio");
const request = require("request");
const fs =  require("fs");
const path = require("path");

// 3 tareeke se import kr skte h dekh lo

// const projectsObj = require("./projects.js");

// const {haathi } = require("./projects.js"); yaha haathi se tbhi hi bula payenge jb waha se haathi aayega 


const {getAllProjects} = require("./projects.js");
// ye wala tareeka mast h

let issuePath = path.join(__dirname,"");
if(!fs.existsSync(issuePath)){
    fs.mkdirSync(issuePath);
}



let url="https://github.com/topics"

request(url,cb);

function cb(err,res,body){
    if(err){
        console.log("error");

    }
    else{
        handleHtml(body);
    }
}

function handleHtml(html){
    const selecTool = cheerio.load(html);

     // let topicsArr= selecTool(".py-4.border-bottom.d-flex.flex-justify-between"); ye sochna h => link chaiye isliye aisa ni kr rhe
    let topicsArr = selecTool(`.py-4.border-bottom.d-flex.flex-justify-between>a[class="no-underline flex-grow-0"]`);
    // hmko yaha topics ka rel link chaiye isliye {}..}>a[] krke kr rhe h 
   
   

    for(let i=0;i<1;i++){
        let relLinkTopic=selecTool(topicsArr[i]).attr("href");
        let fullLink = "https://github.com"+relLinkTopic;
        console.log(fullLink);
        // ye uss page ka link h jis page pr iss topic ke corresponding projects pade hue h 
        // haathi(fullLink);

        // projectsObj krke import krte to . waghera use krna padta
        // projectsObj.getAllProjects(fullLink);

        // projects ke page pr request marne ke loe alg fil bna lenge uske andar getAllProjects naam ka function h
        //  destructuring se projet ka naam hi import kr lenge to direct fun me paas kr skte h
        getAllProjects(fullLink);

        



    }
    
   
    

}
