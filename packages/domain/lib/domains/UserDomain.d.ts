declare class UserDomain {
    private _name;
    private _email;
    constructor(name: string, email: string);
    get name(): string;
    get email(): string;
}
export default UserDomain;
