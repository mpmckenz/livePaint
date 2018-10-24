// Add logic to this script to poll server every second for updated pixels.

ServerSyncRate = 1000
allServerUpdatesArr = 0

function serverPollForNewUpdates() {
    payloadForClient = {
        "localUpdatesObj": localUpdateArr,
        "allServerUpdatesObj": allServerUpdatesArr
    }
JSON.stringify(payloadForClient)

fetch(updatePath, {
    method: POST,
    headers: {"Content-Type": "application/javascript; charset=utf-8"},
    body: payloadForClient
})
.then(response => response.json())
.then(allServerUpdatesArr =+ )

setTimeout(serverPollForNewUpdates, ServerSyncRate)
}
setTimeout(serverPollForNewUpdates, ServerSyncRate)

// function serverPoll() {
//     body
//     clientUpdates
// } 
// stringify them

// fetch the local updates and all serverupdates via POST method (dont for get to JSON.stringify(THEM))

// add new data/updates to server object that the clients need to get

// empty the local client updates object

// set timeout on this function one inside the function to constantly get new updates and another outside function to initialize
