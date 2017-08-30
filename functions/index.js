const functions = require('firebase-functions');


exports.userManagement = functions.https.onRequest((req, res) => {

    var auth = req.get("Authorization")
    var query = req.query
    var body = req.body


    if(req.method === "GET"){

        //로그인
        var str = new Buffer(auth,'base64').toString()
        res.send(str)

    }if(req.method === "POST"){

        //회원가입
        res.send("ID : " +body.id+"PASSWORD : "+body.password)

    }if(req.method === "PUT"){
        res.send("uid : " + query.uid +"body : "  + body.password)


    }if(req.method === "DELETE"){
        res.send(query.uid)

    }

});