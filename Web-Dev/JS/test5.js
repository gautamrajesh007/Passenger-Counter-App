async function main(){
    const db = fetch('https://jsonplaceholder.typicode.com/users')

    db.then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
    });
    console.log('END');
}
main();