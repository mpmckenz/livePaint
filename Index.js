const express = require("express");
const port = 3001;
const app = express();
const path = require("path");
const publicFolderPath = path.join(__dirname, "public");
const updatePath = "/updates";
const updateArr = []

app.use(express.static(publicFolderPath));
app.use(express.json());

app.post(updatePath, function (request, response) {
    if (request.payloadForClient.localUpdateArr.length > 0) {
        request.payloadForClient.localUpdatesObj.forEach(update => updateArr.push(update)
        )};
        onlyNewUpdatesArr = updatesArr.slice(request.payloadForClient.allServerUpdatesObj)
        response.send({"onlyNewServerUpdatesObj": onlyNewServerUpdatesArr})
})

// app.post and do a callback function that gets only NEW client updates with an if statement via ForEach() new update push to new array, slice the new array, and response.send the only new server updates array

app.listen(port, console.log(`localhost:${port} up and running`));