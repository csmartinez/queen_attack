describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });
  it('is true if the x coordinates are matching', function() {
    expect(queenAttack([2, 3], [2, 8])).to.equal(true);
  });
  it('is true if the y coordinates are matching', function() {
    expect(queenAttack([2, 8], [4, 8])).to.equal(true);
  });
  it('is true if the queen can attack diagonally', function() {
    expect(queenAttack([2,2], [4,4])).to.equal(true);
  });
  it('is true if the queen can attack in every direction diagonally', function(){
    expect(queenAttack([1,5], [5,1])).to.equal(true);
  });
});
