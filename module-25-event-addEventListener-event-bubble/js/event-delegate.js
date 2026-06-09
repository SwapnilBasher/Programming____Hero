// let listItems = document.getElementsByClassName('item'); \

// for (const item of listItems) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

// let newItem = document.createElement('li');
// newItem.innerText = 'orange';

// document.querySelector('#list-container').appendChild(newItem);

// newItem.classList.add('item');

// newItem.addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// });


document.getElementById('list-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('item')) {
        event.target.parentNode.removeChild(event.target);
    }
    // event.target.remove(); // this will remove the list itself if we click outside list-item 
});

let number = 1;

document.getElementById('btn').addEventListener('click', function (event) {
    let newItem = document.createElement('li');
    newItem.innerText = 'pineapple in pizza means what ?' + number++;
    document.querySelector('#list-container').appendChild(newItem);
    newItem.classList.add('item');
});