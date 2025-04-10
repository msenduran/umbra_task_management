// models/Team.js

class Team {
    constructor(teamID, name) {
      this.teamID = teamID;
      this.name = name;
      this.notifications = []; // Bildirim nesneleri listesi
      this.members = [];       // User nesneleri listesi
    }
  
    addMember(user) {
      this.members.push(user);
      console.log(`User ${user.username} added to team ${this.name}.`);
    }
  
    removeMember(userId) {
      this.members = this.members.filter(member => member.id !== userId);
      console.log(`User ${userId} removed from team ${this.name}.`);
    }
  }
  
  module.exports = Team;
  