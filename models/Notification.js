// models/Notification.js

class Notification {
    constructor(notificationID, message, notificationType, sendDateTime = new Date()) {
      this.notificationID = notificationID;
      this.message = message;
      this.notificationType = notificationType;
      this.sendDateTime = sendDateTime;
    }
  
    sendNotification() {
      console.log(`Sending notification: ${this.message}`);
      // Gerçek bildirim gönderim mekanizması (örn: e-posta, SMS) burada entegre edilebilir.
    }
  
    setNotification(message, notificationType, sendDateTime = new Date()) {
      this.message = message;
      this.notificationType = notificationType;
      this.sendDateTime = sendDateTime;
    }
  
    getNotification() {
      return {
        notificationID: this.notificationID,
        message: this.message,
        notificationType: this.notificationType,
        sendDateTime: this.sendDateTime
      };
    }
  }
  
  module.exports = Notification;
  