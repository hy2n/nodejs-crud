const app = require("./server/domain/application");
const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log("Start")
});