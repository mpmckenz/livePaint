const express = require("express");
const port = 3001;
const app = express();
const path = require("path");
const publicFolderPath = path.join(__dirname, "public");
const updatePath = "/updates";
const updateArr = [];

app.use(express.static(publicFolderPath));
app.use(express.json());

app.post(updatePath, function(request, response) {
  if (request.payloadForClient.localUpdateArr.length > 0) {
    request.payloadForClient.localUpdatesObj.forEach(update =>
      updateArr.push(update)
    );
  }
  onlyNewUpdatesArr = updatesArr.slice(
    request.payloadForClient.allServerUpdatesObj
  );
  response.send({
    onlyNewServerUpdatesObj: onlyNewServerUpdatesArr
  });
});

app.listen(port, console.log(`localhost:${port} up and running`));
