// models/Role.js

class Role {
    constructor(roleID, roleName) {
      this.roleID = roleID;
      this.roleName = roleName;
      this.permissions = [];
    }
  
    assignPermission(permission) {
      this.permissions.push(permission);
      console.log(`Permission '${permission}' assigned to role '${this.roleName}'.`);
    }
  
    removePermission(permission) {
      this.permissions = this.permissions.filter(perm => perm !== permission);
      console.log(`Permission '${permission}' removed from role '${this.roleName}'.`);
    }
  
    getRoleName() {
      return this.roleName;
    }
  }
  
  module.exports = Role;
  