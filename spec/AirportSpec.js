describe('Airport', function(){
  it('can be created', function(){
    var airport = new Airport();
    expect(airport instanceof Airport).toBeTruthy();
  });
  it('can add planes to hangar', function(){
    // Setup
    var airport = new Airport();
    var plane = "Plane";
    // Exercise
    airport.clearForLanding(plane)
    // Verify
    expect(airport.planes()).toContain(plane)
  });
  it('can remove planes from hangar', function(){
    // Setup
    var airport = new Airport;
    var plane = "Plane"
    airport.clearForLanding(plane)
    // Exercise
    airport.clearForTakeOff(plane)
    // Verify
    expect(airport.planes()).toEqual([])
  });


  describe('', function(){
    it('', function(){

    });
  });
});
