const cheerio = require("cheerio");
const request = require("request");

const {getIssue} = require("./issue.js");

function getAllProjects(url){
request(url,cb);
}

function cb(err,res,body){
    if(err){
        console.log("error");
    }
    else{
        getAllProjectsLink(body);
    }
}

function getAllProjectsLink(html){
    const selecTool = cheerio.load(html);
    // let projectsArr=selecTool(`a[data-ga-click="Explore, go to repository, location:explore feed"]`);

    let projectsArr=selecTool(`.f3.color-fg-muted.text-normal.lh-condensed>a[class="text-bold wb-break-word"]`);



// ye wala badhia sweet and simple h pehle baar me css selector bekar sa choose kia tha isloye pta ni kya kya likhna pada aage se selector choose krne me dhyan rakhna
    for(let i=1;i<=8;i++){
        let relLinkProject= selecTool(projectsArr[i]).attr("href");
        
        // console.log(relLinkProject);
        let fullLink = "https://github.com"+relLinkProject;
        console.log(i+" " +fullLink)
        getIssue(fullLink);
        }



    // for(let i=0;i<16;i=i+2){

    // let i=0;
    // let count=0;
    // while(i<projectsArr.length){
       
    //     if(count>=8){
    //         break;
    //     }

        // if(selecTool(projectsArr[i+1]).attr("href")!=selecTool(projectsArr[i]).attr("href"))
        // {
        //     count++;
        
        // console.log(count);
        // i++;
        
        

       
    // }
    // }
    // console.log(projectsArr.length);
    

}

module.exports={
  // haathi:getAllProjects, agr waha pr haathi ko bulana h to yaha se haathi ko bhejna padega mtlb yaha  se jo naam jayega waha main mee destructuring me wahi naam se bulaya jaega 
    getAllProjects:getAllProjects
};