var Rating = require('./rating.js');

module.exports = function Comment(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.createTime = new Date();
    this.createTimeDisplay = this.createTime.toLocaleDateString() + " : " + this.createTime.toLocaleTimeString();
    this.rating = new Rating();
    this.comments = [];
};

