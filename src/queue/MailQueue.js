// src/queue/MailQueue.js

const EmailService = require("../services/EmailService");

class MailQueue {
  async add(job) {
    await EmailService.send(job);
  }
}

module.exports = new MailQueue();
