const obj = {firstName: 'Melody',
    lastName: 'Cassie',
    cohort: 18,
    sex: 'female',
    bestColor: 'Purple n black',
    location: 'australia'
};
const values = Object.values(obj);
values.forEach(value=>{
    console.log(value)
});

const entries = Object.entries(obj)
entries.forEach((([key,value])=>{
    console.log(`${key}: ${value}`)
}))