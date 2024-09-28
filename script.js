this.name = 'John';

const obj1 = {
    name: 'Alice',
    nfunction: function(){
        console.log(this.name);
    },
    afunction: () => {
        console.log(this.name);
    }
    
}

obj1.nfunction();

obj1.afunction();