// UserDTO.ts
class UserDTO {
    constructor(public id: string, public username: string, public email: string) {
        // Typically, DTOs are simple data containers with no business logic.
    }
}
export default UserDTO