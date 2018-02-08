const express = require("express");
const router = express.Router();

const InterviewController = require('../controllers/interview');
const checkAuth = require('../middleware/check-auth');

router.post("/", InterviewController.interview_create);


router.get("/", InterviewController.interview_get);

router.get("/:interviewId", checkAuth, InterviewController.interview_getbyid);

router.delete("/:ineterviewId", checkAuth, InterviewController.interview_delete);

module.exports = router;
