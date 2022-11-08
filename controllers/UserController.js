const m$user = require("../modules/user.module");
const { Router } = require("express");
const response = require("../helpers/response");

const UserController = Router();

/**
 * list user
 *
 * http://localhost:8000/api/users
 */

UserController.get("/", async (req, res) => {
  const list = await m$user.listUser();

  response.sendResponse(res, list);
});

/**
 * create user
 * @param {string} name
 * @param {string} email
 * @param {string} password
 *
 * httpp://localhost:8000/api/users/add
 */

UserController.post("/add", async (req, res) => {
  // req.body  input dari client yang berupa json
  const add = await m$user.createUser(req.body);

  // response helper
  response.sendResponse(res, add);
});

/**
 * update user
 * @param {number} id
 * @param {string} name
 * @param {string} email
 * @param {string} password
 *
 * httpp://localhost:8000/api/users/
 */

UserController.put("/add", async (req, res) => {
  // req.body  input dari client yang berupa json
  const update = await m$user.updateUser(req.body);

  // response helper
  response.sendResponse(res, update);
});

/**
 * Delete user
 * @param {number} id
 *
 * http://localhost:8000
 */

UserController.delete("/:id", async (req, res) => {
  const del = await m$user.deleteUser(Number(req.params.id));

  response.sendResponse(res, del);
});

module.exports = UserController;
