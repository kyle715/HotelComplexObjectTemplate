/*global $*/

var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

// display rooms as radio options
function displayInfo(room) {
    document.getElementById("available").innerHTML = hotel.rooms[room].available;
    document.getElementById('price').innerHTML = hotel.rooms[room].price;
}

for (var i=0; i < hotel.rooms.length; i ++) {
    var radioBtn =document.createElement("INPUT");
    var radioLbl =document.createElement("LABEL");
    radioBtn.setAttribute('type', 'radio');
    radioBtn.setAttribute('name', 'rooms');
    radioBtn.setAttribute('value', i);
    radioBtn.setAttribute('id', "room" + i );
    radioBtn.setAttribute('onclick', `displayInfo(${i})`);
    radioLbl.innerHTML = hotel.rooms[i].name;
    document.getElementById('radialSection').appendChild(radioBtn);
    document.getElementById('radialSection').appendChild(radioLbl);
}

// on form submission confirm radio was selected

// and checkbox is checked