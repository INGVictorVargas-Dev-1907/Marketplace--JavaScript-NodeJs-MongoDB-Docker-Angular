const getHealthStatus = () => {
    return {
        success: true,
        message: 'API funcionando correctamente',
        timestamp: new Date().toISOString(),
    };
};

module.exports = {
    getHealthStatus,
};