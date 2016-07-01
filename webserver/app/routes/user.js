var express = require('express');
var User = require('../models/user');

exports.addAPIRouter = function(app, mongoose) {

  var router = express.Router();

 	router.get('/', function(req, res) {
    User.find(function(err, users) {
      if(err) {
        res.status(500).send({msg: err.errmsg});
      } else if(users && users.length>0) {
        res.status(200).send(users);
      } else {
        res.status(404).send([]);
      }
    });
 	});

  router.post('/', function(req, res) {
    var newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
    });
    newUser.save(function (err) {
      if(err) {
        res.status(500).send({msg: err.errmsg});
      } else {
        res.status(201).send({'msg': 'ok'});
      }
    });
 	});
  router.post('/check_username', function(req, res) {
    User.findOne({
      'username': req.body.username,
    }, function(err, user) {
      if(err) {
        res.status(500).send({'msg': err.errmsg});
      } else if(user) {
        res.status(200).send({'msg': 'Exist'});
      } else {
        res.status(404).send({'msg': 'Does not exist'});
      }
    });
 	});
  router.post('/login', function(req, res) {
    User.findOne({
      'username': req.body.username,
      'password': req.body.password
    }, function(err, user) {
      if(err) {
        res.status(500).send({'msg': err});
      } else if(user) {
        res.status(200).send({'msg': 'Success'});
      } else {
        res.status(400).send({'msg': 'Fail'});
      }
    });

 	});

  router.post('/check_username', function(req, res) {
    User.findOne({
      'username': req.body.username,
    }, function(err, user) {
      if(err) {
        res.status(500).send({'msg': err.errmsg});
      } else if(user) {
        res.status(200).send({'msg': 'Exist'});
      } else {
        res.status(404).send({'msg': 'Does not exist'});
      }
    });
 	});

  router.get('/:username', function(req, res) {
    User.findOne({
      'username': req.params.username
    }, function(err, user) {
      if(err) {
        res.status(500).send({'msg': err.msg});
      } else if(user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({'msg': 'Not found'});
      }
    });
 	});

  router.put('/:username', function(req, res) {
    User.findOne({
      'username': req.params.username
    }, function(err, user) {
      if(err) {
        res.status(500).send({'msg': err.msg});
      } else if(user) {
        user.firstname = req.body.firstname || user.firstname;
        user.lastname = req.body.lastname || user.lastname;
        user.password = req.body.password || user.password;
        user.save(function (err) {
          if(err) {
            res.status(500).send({msg: err.errmsg});
          } else {
            res.status(200).send(user);
          }
        });
      } else {
        res.status(404).send({'msg': 'Not found'});
      }
    });
 	});
  app.use('/api/v2.0/user', router);
}
