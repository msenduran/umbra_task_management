// models/Task.js

class Task {
    constructor(taskID, title, description, assignedTo, status = 'open') {
      this.taskID = taskID;
      this.title = title;
      this.description = description;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.status = status;         // Örn: 'open', 'in-progress', 'done'
      this.assignedTo = assignedTo; // User nesnesi
      this.comments = [];           // Comment nesneleri listesi
    }
  
    updateTaskStatus(newStatus) {
      this.status = newStatus;
      this.updatedAt = new Date();
      console.log(`Task ${this.taskID} status updated to: ${this.status}`);
    }
  
    addComment(comment) {
      this.comments.push(comment);
      console.log(`Comment ${comment.commentID} added to Task ${this.taskID}.`);
    }
  
    deleteTask() {
      console.log(`Task ${this.taskID} has been deleted.`);
      // Gerçek silme işlemleri (ör: veritabanı) entegre edilebilir.
    }
  }
  
  module.exports = Task;
  