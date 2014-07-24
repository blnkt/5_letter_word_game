describe("fiveLetterWordGame", function() {
  it("counts the number of shared letters in two words", function() {
    fiveLetterWordGame("black", "white").should.eql(0);
  });

  it("counts the number of shared letters in two words", function() {
    fiveLetterWordGame("black", "black").should.eql(5);
  });

  it("counts the number of shared letters in two words", function() {
    fiveLetterWordGame("black", "bleak").should.eql(4);
});
});
