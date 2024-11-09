let classroom = {
    className: "DSA",
    studentCapacity: 30,
    registered: 0,
    checkavailiabilty: function(num){
        let leftSeat = this.studentCapacity - this.registered;
        if (num <= leftSeat )
            return true;
        else return false;
    },
    added: function(num){
        this.registered += num;
    },
    dropped: function(num){
        this.registered -= num;
    }
}

classroom.added(20);
console.log(classroom.checkavailiabilty(4));
classroom.dropped(9);
console.log(classroom.checkavailiabilty(4));
classroom.added(25);
console.log(classroom.checkavailiabilty(4));
classroom.dropped(3);

console.log(classroom.checkavailiabilty(4));