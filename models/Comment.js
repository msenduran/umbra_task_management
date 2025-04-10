// models/Comment.js

class Comment {
    constructor(commentID, content, authorID) {
      this.commentID = commentID;
      this.content = content;
      this.authorID = authorID;  // User ID
      this.createdAt = new Date();
    }
  
    addComment() {
      console.log(`Comment ${this.commentID} added: ${this.content}`);
    }
  
    editComment(newContent) {
      this.content = newContent;
      console.log(`Comment ${this.commentID} edited. New content: ${this.content}`);
    }
  
    deleteComment() {
      console.log(`Comment ${this.commentID} has been deleted.`);
      // Gerekirse veritabanından silme entegre edilebilir.
    }
  }
  
  module.exports = Comment;
  