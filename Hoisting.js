var nums=10;

console.log(square);
console.log(cube);

square(4);
function square(n){
    var ans=n*n;
    console.log(ans);
}

var cube=(nums)=>{
    var ans=nums*nums*nums;
    console.log(ans);
}
cube(nums);
// arrow function acts similar to variable in Execution Context