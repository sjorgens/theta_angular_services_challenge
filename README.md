Exercise

1. Create Angular controller that brings in Angular service
2. Service should hold a Theta object that has ~10 properties of Theta

var theta = {
    name: 'Theta',
    numStudents: 22,
    spiritAnimal: 'Wolverine',
    getStudents: getStudents(),
    school: 'Prime Academy',
    location: {
        state: 'MN',
        city: 'Bloomington'
    }
    country: 'USA',
    language: function() {
        return 'JavaScript';
    }
}