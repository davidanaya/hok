const Campaign = require('../models').punchcard_campaigns_webapp;

exports.getCampaigns = (req, res) => {
  Campaign.findAll()
    .then(campaigns => res.status(200).send(campaigns))
    .catch(err => res.status(404).send(err));
};
