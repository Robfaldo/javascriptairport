describe('Airport', function(){
  it('can be created', function(){
    var airport = new Airport();
    expect(airport instanceof Airport).toBeTruthy();
  });
  it('can clear planes for landing', function(){
    // Setup
    var airport = new Airport();
    var plane = "Plane";
    // Exercise
    airport.clearForLanding(plane)
    // Verify
    expect(airport.planes()).toContain(plane)
  });

  describe('', function(){
    it('', function(){

    });
  });
});
