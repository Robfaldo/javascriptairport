describe('FeatureTests', function(){

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport
  it('a plane can be instructed to land at an airport', function(){
    // Setup
    var airport = new Airport();
    var plane = new Plane();
    // Exercise
    plane.land(airport)
    // Verify
    expect(airport.planes()).toContain(plane)
  });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport
  // and confirm that it is no longer in the airport

  it('a plane can be instructed to take off', function(){
    // Setup
    var plane = new Plane;
    var airport = new Airport;
    // Excercise
    plane.land(airport)
    plane.takeOff()
    // Verify
    console.log(airport.planes())
    expect(airport.planes()).toEqual([])
  });


});



// user --.takeOff(airport)-->Plane
// user <-----string(confirmation message)--- Plane

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
//
// user ----- Plane -----

// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full
//
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate
