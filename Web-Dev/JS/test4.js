async function main(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 2000);
    });

    await promise.then((status) => {
        console.log(status);
    }).catch((error) => {
        console.log(error);
    });

    function validateUser(){

    }
    console.log('END');
}
main();