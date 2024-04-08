const registrationModel = require('../models/rmodel');

exports.register = (req, res) => {
    const { id, fullName, address, status } = req.body;
    const fee = registrationModel.calculateFee(status);

    const confirmation = {
        id,
        fullName,
        address,
        status,
        fee
    };

    res.json(confirmation);
};
