const ServerSyncRate = 1000;
let allServerUpdatesArr = 0;

function serverPollForNewUpdates() {
  const UpdateArr = [];
  payloadForClient = {
    localUpdatesObj: UpdateArr,
    allServerUpdatesObj: allServerUpdatesArr
  };
  JSON.stringify(payloadForClient);

  fetch("/updates", {
    method: "POST",
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    },
    body: payloadForClient
  })
    .then((localUpdateArr = []))
    .then(response => response.json())
    .then((allServerUpdatesArr = +response.onlyNewUpdatesArr.length));
  if (response.onlyNewUpdatesArr.length > 0) {
    response.onlyNewUpdatesArr.forEach(update => {
      Bitmap.prototype.getUpdatesFromServer(update[0], update[1], update[2]);
    });
  }
  setTimeout(serverPollForNewUpdates, ServerSyncRate);
}
setTimeout(serverPollForNewUpdates, ServerSyncRate);
