const express = require('express');
const bodyParser = require('body-parser');
var alert = require('alert');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var seatList = [];
var costArr = [0];
var countSeat = 0;
var cost = 0;

app.get('/', function (req, res) {
    res.render('index', { seatListOut: seatList, payment: costArr, });
})

app.post('/', function (req, res) {
    const data = req.body.seat;
    const clear = req.body.cancel;

    let flag = 0;


    for (let i = 0; i < 10; i++) {
        if (seatList[i] === data) {
            flag = 1;
        }

    }

    if (clear === "cancel") {
        seatList.splice(0, seatList.length);

        costArr[0] = 0;
        cost = 0;
        countSeat = 0;
        console.log(costArr);

    }
    console.log(costArr);


    if (flag == 0) {
        seatList.push(data);
        countSeat = countSeat + 1;
        cost = 300 * countSeat;
        costArr[0] = cost;
        console.log(costArr);
    }



    res.redirect('/');


})

app.listen(3000, function () {
    console.log("Server Is running");
})
