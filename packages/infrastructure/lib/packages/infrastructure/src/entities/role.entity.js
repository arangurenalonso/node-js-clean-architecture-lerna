"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const baseEntityModel_1 = __importDefault(require("./abstrations/baseEntityModel"));
const user_role_entity_1 = __importDefault(require("./user-role.entity"));
let RoleEntity = class RoleEntity extends baseEntityModel_1.default {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_role_entity_1.default, userRole => userRole.role),
    __metadata("design:type", Array)
], RoleEntity.prototype, "userRoles", void 0);
RoleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "role" })
], RoleEntity);
exports.default = RoleEntity;
//# sourceMappingURL=role.entity.js.map