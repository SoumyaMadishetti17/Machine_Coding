let foo = 'bar';
function test() { 
    console.log(foo); 
    var foo = 'baz';
}
test();