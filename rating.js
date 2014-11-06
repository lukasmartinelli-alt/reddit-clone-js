module.exports = function Rating() {
    this.value = 0;
    var voters = [];
    var self = this;
    
    this._up = function(userId) {
        if (!voters[userId]) {
            self.value++;
            voters[userId] = true;
        }
        return self.value;
    };
    
    this._down = function (userId) {
        if (!voters[userId]) {
            self.value--;
            voters[userId] = true;
        }
        return self.value;
    };
};



