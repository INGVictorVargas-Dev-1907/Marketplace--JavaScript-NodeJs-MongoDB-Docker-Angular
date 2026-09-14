const notFoundMiddleware = (req, res) => {
    res.status(404).json({
        success: false,
        message:`Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    });
};

module.exports = notFoundMiddleware;