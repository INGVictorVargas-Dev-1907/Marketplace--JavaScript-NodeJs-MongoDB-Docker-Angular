const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;

    res.statusCode(statusCode).json({
        success: false,
        message: err.message || 'Error interno del servidor',
    });
};

module.exports = errorMiddleware;