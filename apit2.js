const express = require("express");
const router = express.Router();
const players = [
{
id: 1,
name: "MS Dhoni",
team: "Chennai Super Kings",
role: "Batsman",
runs: 5082,
wickets: 0
},
{
id: 2,
name: "Virat Kohli",
team: "Royal Challengers Bangalore",
role: "Batsman",
runs: 7263,
wickets: 4
},
{
id: 3,
name: "Rohit Sharma",
team: "Mumbai Indians",
role: "Batsman",
runs: 6211,
wickets: 15
},
{
id: 4,
name: "Hardik Pandya",
team: "Mumbai Indians",
role: "All-rounder",
runs: 2309,
wickets: 53
},
{
id: 5,
name: "Rashid Khan",
team: "Gujarat Titans",
role: "Bowler",
runs: 388,
wickets: 139
}
];
// Route to get player by ID and display in HTML
router.get("/player/id/:id", (req, res) => {
var player = players.filter(p => p.id == req.params.id);
if (player) {
res.set("Content-Type", "text/html");
for (player of player){
res.write(`
<html>
<head><title>${player.name}</title></head>
<body>
<h2>${player.name}</h2>
<strong>Team:</strong> ${player.team} <br>
<strong>Role:</strong> ${player.role}<br>
<strong>Runs:</strong> ${player.runs}<br>
<strong>Wickets:</strong> ${player.wickets}
</body>
</html>
`);
}
res.send();
} else {
res.send("<h3>Player not found</h3>");
}
});
router.get("/player/role/:role", (req, res) => {
    let player = players.filter(p => p.role.toLowerCase() === req.params.role.toLowerCase());

console.log(player)
if (player) {
res.set("Content-Type", "text/html");
for (player of player){
res.write(`
<html>
<head><title>${player.name}</title></head>
<body>
<h2>${player.name}</h2>
<strong>Team:</strong> ${player.team} <br>
<strong>Role:</strong> ${player.role}<br>
<strong>Runs:</strong> ${player.runs}<br>
<strong>Wickets:</strong> ${player.wickets}
</body>
</html>
`);
}
res.send();
} else {
res.send("<h3>Player not found</h3>");
}
});
module.exports = router;