var Activity = require('../models/activity');

module.exports = {
    get: function (req, res) {
        Activity.find({}).exec(function (err, result) {
            res.send(result);
        })
    }
}
