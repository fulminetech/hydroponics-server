// Note:permission entries to be added manually

const express = require("express");
const sequelize = require('./config/database')
var cors = require('cors')

const Recipies = require('./models/Recipies');
const Sensors = require("./models/Sensors");
const Activity = require("./models/Activity");

// sequelize.sync({force:true}).then(()=> console.log('db ready')) // To clear DB and enforce schema
sequelize.sync().then(() => console.log('db ready'))
const app = express();

app.use(express.json())
app.use(cors({ origin: "*" }));

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

app.get("/recipies", async (req, res) => {
    const recipies = await Recipies.findAll();
    res.send(recipies);
})

app.post("/recipies", async (req, res) => {
    await Recipies.create(req.body);
    res.send('recipie is created');
})

app.get("/sensors", async (req, res) => {
    const recipies = await Sensors.findAll();
    res.send(recipies);
})

app.post("/sensors", async (req, res) => {
    await Sensors.create(req.body);
    res.send('data added');
})

app.get("/activity", async (req, res) => {
    const recipies = await Activity.findAll();
    res.send(recipies);
})

app.post("/activity", async (req, res) => {
    await Activity.create(req.body);
    res.send('data added');
})


app.listen(3000, async () => {
    console.log("app is running");
});