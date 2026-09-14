const healthService = require('../services/health.service');

const healthCheck = (req, res) => {
    const healthStatus = healthService.getHealthStatus();

    res.status(200).json(healthStatus);
};

module.exports = {
    healthCheck,
};