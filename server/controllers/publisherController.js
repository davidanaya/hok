const Publisher = require('../models').punchcard_data_raw_webapp;

exports.getPublishers = (req, res) => {
  Publisher.findAll({ where: { campaign_id: req.params.id } })
    .then(publishers => res.status(200).send(publishers))
    .catch(err => res.status(404).send(err));
};