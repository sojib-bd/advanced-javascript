
let famous = [
    { id: 1, name: 'Sharukh', age: 50, salary: 50000 },
    { id: 2, name: 'Salman', age: 55, salary: 70000 },
    { id: 3, name: 'Amir', age: 45, salary: 90000 },

]

const names = famous.map(x => x.name);

const ages = famous.filter(x => x.age > 45);

const highest = famous.find(x => x.salary > 75000);

console.log(highest);