let myobj={
    name:"hanieye",
    age:20,
    email:"haniemeer80",
    blogs:["madamblue","cyrpcy"],
    login:function(){
        console.log("user come back")
    },
    logout:function(){
        console.log("user left")
    },
    myblogs:function(){
        // console.log(this.blogs)
        console.log("this user has written following blogs")
        this.blogs.forEach(x=>{
            console.log(x)
        })
    }
};
myobj.myblogs();
console.log(this)
