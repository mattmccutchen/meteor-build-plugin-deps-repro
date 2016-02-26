/// <reference path="./typings/meteor/meteor.d.ts" />

class Greetings extends Mongo.Collection<Object> {
    constructor(public name: string = 'World') {
      super(null);
    }

    findOne() {
        return `Hello ${this.name}`;
    }
}

console.log(new Greetings().findOne());
