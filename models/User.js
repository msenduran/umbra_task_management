// models/User.js

class User {
    constructor(id, username, password, email, phone) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  
    login() {
      console.log(`${this.username} has logged in.`);
      // Kimlik doğrulama işlemleri entegre edilebilir.
    }
  
    logout() {
      console.log(`${this.username} has logged out.`);
    }
  
    register() {
      console.log(`${this.username} has registered.`);
      // Kullanıcı kaydı işlemleri yapılabilir.
    }
  
    updateProfile(updates) {
      Object.keys(updates).forEach(key => {
        if (this.hasOwnProperty(key)) {
          this[key] = updates[key];
        }
      });
      this.updatedAt = new Date();
      console.log(`Profile updated for ${this.username}.`);
    }
  }
  
  module.exports = User;
  