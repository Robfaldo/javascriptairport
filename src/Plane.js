function Plane() {

}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

Plane.prototype.takeOff = function(airport) {
  airport.clearForTakeOff(this);
};

// I want this object to invoke
// the clearForLanding method
// of the instance of the airport
// class
