const mongoose = require("mongoose");

const Interview = require("../models/interview");




exports.interview_create = (req, res, next) => {
const interview = new Interview({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.gender,
    phone: req.body.phone,
    department: req.body.department,
    interviewtype: req.body.interviewtype,
    date: req.body.date,
    time: req.body.time,
    interviewer: req.body.interviewer,
    });
    interview.save()
    .then(result => {
        res.status(201).json({
            message: "Interview created"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.interview_get = (req, res, next) => {
     Interview.find()
    .exec()
    .then(docs => {
      res.status(200).json({
        result: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            gender: doc.gender,
            phone: doc.phone,
            department: doc.department,
            interviewtype: doc.interviewtype,
            date: doc.date,
            time: doc.time,
            interviewer: doc.interviewer,
          };
        }
      )
    })
  })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
exports.interview_getbyid = (req, res, next) => {
  if (!req.params.interviewId) {
    res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
  }
  else {
  Interview.find({ _id: req.params.interviewId })
    .exec()
    .then(result => {
      res.status(200).json({
        result: result
      })
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: 'Not Found',
        error: err
      });
    });
  }
};

exports.interview_delete = (req, res, next) => {
  Interview.remove({ _id: req.params.ineterviewId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Interview deleted"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
