var createUniqueFeed = require('../logic/CreateUniqueFeed')

exports.create = async (req, res) => {
  var result = await createUniqueFeed. createFeed();
  res.setHeader('Content-Type', 'text/plain');
  res.send(result);
};