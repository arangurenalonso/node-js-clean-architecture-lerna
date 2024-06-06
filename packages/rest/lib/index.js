"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.UserRouter = void 0;
var user_route_1 = require("./routers/user.route");
Object.defineProperty(exports, "UserRouter", { enumerable: true, get: function () { return __importDefault(user_route_1).default; } });
var user_controller_1 = require("./controllers/user.controller");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return __importDefault(user_controller_1).default; } });
//# sourceMappingURL=index.js.map