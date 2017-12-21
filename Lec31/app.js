var Tony = {
    firstname: "tony",
    lastname: "Pony",
    address: {
        street: "123 Some Street",
        city: "New York",
        state: "NY"
    }
};

function greet(person) {
    console.log('HEY ' + person.firstname);
}

greet(Tony);

greet({
    firstname: "Poop",
    lastname: "McGee",
    address: {
        street: "555 Poop Street",
        city: "New York",
        state: "NY"
    }
});

//Add a new property to object Tony
Tony.address2 = {
    street: "333 Second Street"
};