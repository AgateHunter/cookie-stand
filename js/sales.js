"use strict";

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


let Seattle = new Location('Seattle', 23, 65, 6.3, '6am - 7pm', '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121');
let Tokyo = new Location('Tokyo', 3, 24, 1.2, '6am - 7pm', '222-222-2222', '1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634');
let Dubai = new Location('Dubai', 11, 38, 3.7, '6am - 7pm', '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai');
let Paris = new Location('Paris', 20, 38, 2.3, '6am - 7pm', '444-444-4444', 'Champ de MediaStream, 5 Avenue Anatole France, 75007');
let Lima = new Location('Lima', 2, 16, 4.6, '6am - 7pm', '555-555-5555', 'Cache. Gral. Borgoño cuadra 8, Miraflores 15074');
let storeLocation = [Seattle, Tokyo, Dubai, Paris, Lima];


function Location(name, min, max, avg, openHours, phone, address) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.openHours = openHours;
  this.phone = phone;
  this.address = address;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.customersPerHour = [];

}

Location ();
