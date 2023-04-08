function genRoom(name) {
    let p = document.getElementById('rooms');
    let elem = document.createElement('div');
    elem.className = 'room';
    elem.innerHTML = name;
    p.appendChild(elem);
}

function genBuilding(name) {
    let p = document.getElementById('buildings');
    let elem = document.createElement('div');
    elem.className = 'building';
    elem.innerHTML = `<h2>${name}</h2>`;
    p.appendChild(elem);
}

function genBlock(day, start, length) {
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let cal = document.getElementById('calendar');
    if(typeof day === 'string') day = days.indexOf(day);
    let p = cal.children[day];
    let elem = document.createElement('div');
    elem.className = 'block';
    elem.style.top = start + 'px';
    elem.style.length = length + 'px';
    p.appendChild(elem);
}