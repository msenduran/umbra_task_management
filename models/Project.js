// models/Project.js

class Project {
    constructor(projectID, name, startDate, endDate) {
      this.projectID = projectID;
      this.name = name;
      this.startDate = startDate;
      this.endDate = endDate;
      this.tasks = []; // Task nesneleri listesi
      this.team = null; // Team nesnesi
      this.roles = [];  // Role nesneleri listesi
    }
  
    createProject() {
      console.log(`Project '${this.name}' created.`);
      // Projeyi veritabanına kaydetme ya da diğer işlemler yapılabilir.
    }
  
    getProject() {
      return {
        projectID: this.projectID,
        name: this.name,
        startDate: this.startDate,
        endDate: this.endDate,
        tasks: this.tasks,
        team: this.team,
        roles: this.roles
      };
    }
  
    updateProject(updates) {
      Object.keys(updates).forEach(key => {
        if (this.hasOwnProperty(key)) {
          this[key] = updates[key];
        }
      });
      console.log(`Project '${this.name}' updated.`);
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(`Task '${task.title}' added to project '${this.name}'.`);
    }
  
    removeTask(taskID) {
      this.tasks = this.tasks.filter(t => t.taskID !== taskID);
      console.log(`Task ${taskID} removed from project '${this.name}'.`);
    }
  
    addRole(role) {
      this.roles.push(role);
      console.log(`Role '${role.roleName}' added to project '${this.name}'.`);
    }
  
    removeRole(roleID) {
      this.roles = this.roles.filter(r => r.roleID !== roleID);
      console.log(`Role ${roleID} removed from project '${this.name}'.`);
    }
  }
  
  module.exports = Project;
  