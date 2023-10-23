const People = require("../models/people");

exports.getCount = async (req, res, next) => {
    try {
        const peopleCount = await People.find({});

        if (!peopleCount) {
            return res.status(400).send("Couldn't fetch the data");
        }

        return res.status(200).json(peopleCount);
    } catch (error) {
        return res.status(400).send("Couldn't fetch the data");
    }
};

exports.updateCount = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(400).send("Couldn't update the data");
        }

        await People.findOneAndUpdate({}, req.body);
        return res.status(200).send("Success");
    } catch (error) {
        return res.status(400).send("Couldn't update the data");
    }
};
