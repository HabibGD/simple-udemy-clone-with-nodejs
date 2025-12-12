const jwt = require('jsonwebtoken');
const privateKey = require('./private_key');

module.exports = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: "Token manquant ou invalide." });
        }

        const token = authorizationHeader.split(' ')[1]; // 'Bearer token'
        const decodedToken = jwt.verify(token, privateKey);
        
        req.userId = decodedToken.userId; // on attache l'id au req
        next();

    } catch (error) {
        return res.status(401).json({ 
            message: "Accès refusé. Token invalide ou expiré.",
            error: error.message
        });
    }
};
