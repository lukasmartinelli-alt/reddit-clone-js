var Rating = require('./rating.js');

module.exports = function Link(id, title, author, url) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.url = url;
    this.createTime = new Date();
    this.createTimeDisplay = this.createTime.toLocaleDateString() + " : " + this.createTime.toLocaleTimeString();
    this.rating = new Rating();
    this.comments = [];
    this.voters = [];
};
