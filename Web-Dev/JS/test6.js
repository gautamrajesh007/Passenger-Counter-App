async function main(){
    const db = fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((users) => {
        const container = document.querySelector('#users');
        users.forEach((user) => {
            const element = document.createElement('div');
            element.textContent = user.name;
            container.appendChild(element);
        });
    });
};
main();