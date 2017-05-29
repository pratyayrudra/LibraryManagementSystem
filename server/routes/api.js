var express = require('express');

var app =express.Router();

var Library = require('../models/library');
var Student = require('../models/student')

app.get('/', function(req,res){
    console.log("Redirecting to /library.....");
    res.redirect('/library/books');
});

//GET
app.get('/library/books', function(req,res){

    Library.find({}, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        res.send(data);
        console.log("Success.....");
        }
    })

});

//GET ONE
app.get('/library/book/:id', function(req,res){
    var _id = req.params.id;
    Library.findById(_id, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        res.send(data);
        console.log("Success.....");
        }
    })

});

//DELETE
app.delete('/library/delbook/:id', function(req,res){
    var _id = req.params.id;
    Library.findByIdAndRemove(_id, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        console.log("Successfully deleted.....");
        }
    })

});

//POST
app.post('/library/addbook', function(req,res){

    if (!req.body.name){
        return res.status(400).send('Bad Data.....');
    }
    var Book = new Library({
        name: req.body.name,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages,
        image_url: req.body.image_url
    });

    Book.save(function(err, data){
        if (err){
            res.send(err);
            console.log("Error Cant add data.....");
        }
        else{
            res.send(data);
            console.log(data);
            console.log("Successfully data added.....");
        }
    });
});

/*//PUT
app.put('/book/:id', function(req,res){
    var _id = req.params.id;
    var update = req.body;
   
    Office.findByIdAndUpdate(_id,update, {new:true},function(err,data){
        if (err){
            res.send(err);
            console.log("Cant update.....");
        }
        else{
            res.send(data);
            console.log("Updated successfully.....");
        }
    });
});*/

//Get One Student
app.get('/student/:id', function(req,res){
    var _id = req.params.id;
    Student.findById(_id, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        res.send(data);
        console.log("Success.....");
        }
    })

});

//Add Student
app.post('/addstudent', function(req,res){

    if (!req.body.name){
        return res.status(400).send('Bad Data.....');
    }

    var student = new Student ({
        studentname: req.body.name,
        department: req.body.department,
        phoneNo: req.body.phnNo,
        year: req.body.year,
        roll: req.body.roll,
        username: req.body.email
    });

    student.save(function(err, data){
        if (err){
            res.send(err);
            console.log("Error Cant add data.....");
        }
        else{
            res.send(data);
            console.log(data);
            console.log("Successfully data added.....");
        }
    });
});

//Delete Student 
app.delete('/delstudent/:id', function(req,res){
    var _id = req.params.id;
    Student.findByIdAndRemove(_id, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        console.log("Successfully deleted.....");
        }
    })

});


//Find Student by name
app.get('/studentbyname/:name', function(req,res){
    console.log(req.params.name);
    var _name = req.params.name;
    console.log(_name);
    Student.findOne({username : _name}, function(err, data) {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

//GET ALL STUDENT
app.get('/students', function(req,res){

    Student.find({}, function(err, data){
        if(err){
            console.log("Error Cant find records.....");
            res.send(err);
        }
        else{
        res.send(data);
        console.log("Success.....");
        }
    })

});


module.exports = app;