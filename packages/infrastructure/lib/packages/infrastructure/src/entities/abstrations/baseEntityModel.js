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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
class BaseEntityModel {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.active = true;
        this.createdAt = new Date();
    }
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BaseEntityModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], BaseEntityModel.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", name: "created_at", nullable: false }),
    __metadata("design:type", Date)
], BaseEntityModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], BaseEntityModel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", name: "deleted_at", nullable: true }),
    __metadata("design:type", Date)
], BaseEntityModel.prototype, "deletedAt", void 0);
exports.default = BaseEntityModel;
//# sourceMappingURL=baseEntityModel.js.map