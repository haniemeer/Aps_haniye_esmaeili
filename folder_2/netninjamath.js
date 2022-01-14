console.log(Math);
console.log(Math.PI);

const area=7.9;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
const random=Math.random()
console.log(Math.round(random*100))


const userOne={ name: "sara" , age:20}
const userTwo=userOne;
console.log(userOne,userTwo)

userOne.name="najla"
console.log(userOne,userTwo)

userTwo.name="manije"
console.log(userOne,userTwo)
