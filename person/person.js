// let person = { firstName: 'John', lastName: 'Doe', address: { street: 'North 1st street', city: 'San Jose', state: 'CA', country: 'USA' } }; a) Print
// only first name, city and country b) print last name, state and change county to Nigeria c)

const office = { officeName: 'IT office', owner: 'Mr.Mick Uso', 
hqLocation: 'USA', departments: [ { departmentId: 'IuuuuHHBffaa', departmentName: 'Support Team', totalStaff: 8, location: 'USA-south town' },
{departmentId: '34EvvvvbgHBffaa',departmentName: 'Security Team', totalStaff: 10,
location: 'LA town' },{ departmentId: 'GGkhUU8899877',departmentName: 'Finance Team', totalStaff: 6, location: 'Kwari town'} ],
workSechedules: { day: 'monday', time: '8am-8pm' },
 

// officeTwo:function() {
//     this.departments.filter((total)=>{
       
//     })
    
    //console.log(Object.keys(dataArray).filter(k => dataArray[k].includes("c") || dataArray[k].includes("e")));



};

// const officeX = office.departments.filter((main)=>{
    
//})


const officeSpace = {
    officeName:office.officeName, owner:office.owner, hqLocation:office.hqLocation, departments: 
    office.departments.map((pen)=>{
        //console.log(pen)
        return {departmentId: pen.departmentId, departmentName:pen.departmentName}
    })

    
};
console.log(officeSpace);

const staffTotal = office.departments.reduce((acc, curr)=>{
    acc += curr.totalStaff;

    return acc;
},0);
console.log('The total staff is>>',staffTotal)





for(let [key,value] of Object.entries(office)){
    console.log(key + value)
}

// let keys = object.keys(office);
// console.log(keys);


// a) print the office details with the various department name and department id i.e this { officeName: 'IT office', owner: 'Mr.Mick Uso', 
// hqLocation: 'USA', departments: [ { departmentId: 'IuuuuHHBffaa', departmentName: 'Support Team', }, { departmentId: '34EvvvvbgHBffaa', departmentName: 'Security Team', },
//  { departmentId: 'GGkhUU8899877', departmentName: 'Finance Team', } ] }







let person = { firstName: 'John', lastName: 'Doe', address: { street: 'North 1st street', city: 'San Jose', state: 'CA', country: 'USA' } };
//console.log(person)
//a
let keys = Object.keys(person);
console.log(keys)
let vals = Object.values(person);
console.log(vals)
let entries = Object.entries(person)
console.log('result',entries);

const filtered = entries.filter((game)=>{
    console.log(game)
})
console.log(filtered)
// 
// const removeObject = function(obj, prop) {

//     for(let i = 0; i < prop.length; i++) {
//         if(obj.h;pasOwnProperty(prop[i])) {
//             delete obj[prop[i]];
//         }
//     }

// };

// removeObject(person, ['lastName']);
// console.log(person)


// delete person.lastName
// delete person.address.street 
// delete person.address.state
// console.log(person);
 
let {firstName:firstName,address} = person 
console.log(firstName, address.city, address.country)

let obj = {
    firstName: firstName,  address: {state: address.state, country: address.country}
};
// Object.assign(obj, {firstName: "John", address:{city: 'San Jose', country: 'Nigeria'}}); =

console.log(person)
console.log(obj)


//console.log('firstname...',first);

// const city = person.address.city
// console.log('city>>>>',city);

// const country = person.address.country
// console.log('country>>>>',country);

//b
let country = {
    lastName: firstName,  address: {city: address.city, country: address.country}
};
country.address.country = 'Nigeria';
console.log('change country name', country);

//a office



