// index.js

const User = require('./models/User');
const Role = require('./models/Role');
const Task = require('./models/Task');
const Team = require('./models/Team');
const Comment = require('./models/Comment');
const Notification = require('./models/Notification');
const Project = require('./models/Project');

// 1) Yeni bir kullanıcı oluşturup login yapalım.
const user1 = new User(1, 'Alice', 'password123', 'alice@example.com', '123456789');
user1.login();

// 2) Yeni bir takım oluşturalım ve kullanıcıyı ekleyelim.
const team1 = new Team(10, 'Awesome Team');
team1.addMember(user1);

// 3) Bir bildirim oluşturalım ve gönderelim.
const notif = new Notification(100, 'Takıma hoş geldiniz!', 'Info');
notif.sendNotification();
team1.notifications.push(notif);

// 4) Yeni bir proje oluşturup takımı atayalım.
const project1 = new Project(1000, 'Example Project', new Date(), null);
project1.createProject();
project1.team = team1;

// 5) Projeye bir rol ekleyelim.
const adminRole = new Role(200, 'Admin');
adminRole.assignPermission('MANAGE_TASKS');
adminRole.assignPermission('VIEW_REPORTS');
project1.addRole(adminRole);

// 6) Projeye bir görev (task) ekleyelim.
const task1 = new Task(300, 'Setup environment', 'Install Node.js and dependencies', user1);
project1.addTask(task1);

// 7) Göreve yorum (comment) ekleyelim.
const comment1 = new Comment(400, 'Great start! Let me know if you need help.', user1.id);
task1.addComment(comment1);

// 8) Proje bilgilerini konsola yazdıralım.
console.log('--- Project Info ---');
console.log(project1.getProject());
