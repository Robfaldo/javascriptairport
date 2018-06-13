describe('Plane', function(){
  it('can be created', function(){
    var plane = new Plane();
    expect(plane instanceof Plane).toBeTruthy()
  });

  describe('land', function(){
    it('can land', function(){
      // Setup
      var plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding']);
      // Exercise
      plane.land(airport)
      // Verify
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe('takeOff', function(){
    it('can take off from an airport', function(){
      // Setup
      var plane = new Plane();
      var airport = jasmine.createSpyObj('airport',['clearForTakeOff'])
      // Exercise
      plane.takeOff();
      // Verify
      expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane)
    });
  });
});

// How can I verify that the plane has landed?
// Will there be any change in state in plane?
// Will there be any behaviour
