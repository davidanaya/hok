const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const publisherController = require('../controllers/publisherController');

router.get('/', (req, res) => {
  res.json({ hi: 'there' });
});

router.get('/api/v1/campaigns', campaignController.getCampaigns);
router.get('/api/v1/campaigns/:id/publishers', publisherController.getPublishers);

module.exports = router;
