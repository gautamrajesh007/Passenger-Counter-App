function fdfDB() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        },3000);
    });

    return promise;
}

function main(){
    console.log("Start");
    const value = fdfDB();
    console.log(value);

    value.then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log(e);
    });
    console.log("End");
};

main();