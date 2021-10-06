const VotersTest = artifacts.require("Voters");

contract('Voters', () => {
  it ('should initial vote is 0', async () => {
    const votersInstance = await VotersTest.deployed();
    const resultVote = await votersInstance.getVote();
    const vote = resultVote.words[0];
    expect(vote).to.equal(0);
  });

  it ('should put two votes with the same account', async () => {
    const votersInstance = await VotersTest.deployed();
    await votersInstance.setVote();
    const resultVote = await votersInstance.getVote();
    const vote = resultVote.words[0];
    expect(vote).to.equal(1);
    let isError = false;
    try {
      await votersInstance.setVote()
    } catch (e) {
      isError = true;
    }
    expect(isError).to.true;
  });
});
