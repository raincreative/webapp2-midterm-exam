//TASK1
 console.log('statement 1');
 console.log('statement 2');
 console.log('statement 3'); 
 console.log('statement 4');

//  TASK2

 console.log('statement 1');
 console.log('statement 2');

 setTimeout(() => { console.log ( 'callback function is fired');
 },5000);

console.log('statement 3');
console.log('statement 4');

// task 3

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
    console.log(request.responseText);
        
    }
    });
 request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
 request.send();

// task 4 

const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
         callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}
getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }    
});

//TASK 5

const getTodos1 = () => {
    return new Promise((resolve, reject) => {
         const request = new XMLHttpRequest();
         request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status ===
200) {
    
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        });
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        request.send();
    });
}
getTodos1().then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
    });


//TASK 6


fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log('resolved:', response);
    return data = response.json();
}).then(data => {
    console.log('data:', data);
}).catch(err => {
    console.log('rejected:',err);
});


// //TASK 7

const getTodos4 = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
fetch('https://jsonplaceholder.typicode.com/todos/1');
if (response.status !== 200) {
    throw new error('cannot fetch the data');
}
const data = await response.json();
return data;
}
getTodos4()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message));