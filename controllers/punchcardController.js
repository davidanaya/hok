const rp = require('request-promise');

exports.greeting = (req, res) => {
  res.json({ it: 'Worked!' });
}

exports.getPunchcards = async (req , res) => {
  const punchcards = [
    { _id: 123, name: 'card123', publishers: ['facebook', 'twitter'] },
    { _id: 124, name: 'card124', publishers: ['facebook'] },
    { _id: 125, name: 'card125', publishers: ['twitter'] },
    { _id: 126, name: 'card126', publishers: [] }
  ];
  res.render('punchcards', { title: 'Punchcards', punchcards });
}

exports.getPunchcard = async (req, res) => {
  const punchcards = [
    { _id: 123, name: 'card123', publishers: ['facebook', 'twitter'] },
    { _id: 124, name: 'card124', publishers: ['facebook'] },
    { _id: 125, name: 'card125', publishers: ['twitter'] },
    { _id: 126, name: 'card126', publishers: [] }
  ];
  const punchcard = punchcards.find(p => p._id == req.params.id);
  res.render('punchcard', { title: punchcard.name, punchcard });
}