var fs = require("fs");
const csv = require('csvtojson');
const converter = csv()
    .fromFile('./cookielist.csv')
    .then((json) => {
        for (let line of json) {
            //console.log(line);
            //var pagename = line["Page URL"].split("/");
            //pagename = pagename[pagename.length - 1];
            //var s = "---\r\nlayout: co2\r\npermalink: /cookie/demos/" + pagename + "\r\ncontent1: " + line["H1"].split("|").join(",") + "\r\ninlogourl: " + line["ICON URL"] + "\r\n---";
            //console.log(s);
            //fs.writeFileSync("D:\\GitHub\\website\\cookie\\demos\\" + pagename + ".md", s);
            var pagename = line["Link slug"];
            var s = "---\r\nlayout: co2\r\npermalink: /cookie/demos/" + pagename + "\r\ncontent1: " + line["H1"].split("|").join(",") + "\r\ncontent2: " + line["H2"].split("|").join(",")  + "\r\n---";
            fs.writeFileSync("D:\\GitHub\\website\\cookie\\demos\\" + pagename + ".md", s);
        }
    });
