const http = require("http");
const PORT = process.env.PORT || 8000;
let getStories = [
  {
    title: "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4Million",
    link: "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
  },
  {
    title: "'Writing With Fire' Shines a Light on All-Women News Outlet",
    link: "https://time.com/6142628/writing-with-fire-india-documentary/"
  },
  {
    title: "Moderna Booster May Wane After 6 Months",
    link: "https://time.com/6142852/moderna-booster-wanes-omicron/"
  },
  {
    title: "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    link: "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"

  },
  {
    title: "The James Webb Space Telescope Is in Position—And Now We Wait",
    link: "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
  },
  {
    title: "We Urgently Need a New National COVID-19 Response Plan",
    link: "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
  },
]

const server = http.createServer(async (req, res) => {



  //set the request route
  if (req.url === "/getTimeStories" && req.method === "GET") {
    let responseStories = []
    //Finding 6 stories 
    for(let i = 0; i < 6; i++){
        responseStories.push(getStories[i])
    }
    res.end(JSON.stringify(responseStories));
  }

  // If no route present
  else {
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});