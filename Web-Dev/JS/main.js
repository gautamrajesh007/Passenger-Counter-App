const container = document.getElementById('container');

setTimeout(() => {
    console.log('Hello2');
},1000);
for(let i = 0; i < 1000; i++) {
    console.log('Hello1');
}
console.log('THE END');