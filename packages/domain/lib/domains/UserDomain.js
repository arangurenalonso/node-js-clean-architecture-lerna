"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDomain {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
}
exports.default = UserDomain;
//# sourceMappingURL=UserDomain.js.map