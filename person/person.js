// let person = { firstName: 'John', lastName: 'Doe', address: { street: 'North 1st street', city: 'San Jose', state: 'CA', country: 'USA' } }; a) Print
// only first name, city and country b) print last name, state and change county to Nigeria c)

const office = { officeName: 'IT office', owner: 'Mr.Mick Uso', 
hqLocation: 'USA', departments: [ { departmentId: 'IuuuuHHBffaa', departmentName: 'Support Team', totalStaff: 8, location: 'USA-south town' }, { departmentId: '34EvvvvbgHBffaa',
departmentName: 'Security Team', totalStaff: 10, location: 'LA town' }, { departmentId: 'GGkhUU8899877', departmentName: 'Finance Team', totalStaff: 6, location: 'Kwari town' } ],
workSechedules: { day: 'monday', time: '8am-8pm' }

}; 

// a) print the office details with the various department name and department id i.e this { officeName: 'IT office', owner: 'Mr.Mick Uso', 
// hqLocation: 'USA', departments: [ { departmentId: 'IuuuuHHBffaa', departmentName: 'Support Team', }, { departmentId: '34EvvvvbgHBffaa', departmentName: 'Security Team', },
//  { departmentId: 'GGkhUU8899877', departmentName: 'Finance Team', } ] }







let person = { firstName: 'John', lastName: 'Doe', address: { street: 'North 1st street', city: 'San Jose', state: 'CA', country: 'USA' } };

//a
 const filtered = person.filter((personal) =>{
        return personal.firstName
        
    })
    console.log(filtered);
    

//console.log('firstname...',first);

// const city = person.address.city
// console.log('city>>>>',city);

// const country = person.address.country
// console.log('country>>>>',country);

// //b
// console.log('lastName', person.lastName );

// person.address.country = 'Nigeria';
// console.log('change country name', person);

//a office



