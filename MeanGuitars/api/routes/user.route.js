const express = require("express");
const router = express.Router();
const {
    deleteUserById,
    createUser,
    getUserById,
    getUserList,
    updateUser,
} = require("../controllers/user.controller")

const {
    createUserValidator,
    getUserListValidator,
    updateUserValidator,
    userUrlValidator
} = require("../validators/user.validator")
// User routes
router
    .post("/users/", createUserValidator, createUser)
    .get("/users/", getUserListValidator, getUserList)
    .get("/users/:_id", userUrlValidator, getUserById)
    .delete("/users/:_id", userUrlValidator, deleteUserById)
    .put("/users/:_id", updateUserValidator, updateUser)
    .patch("/users/:_id", updateUserValidator, updateUser)

module.exports = router;