import { tour } from "../schemas/tourmodel.js";

export const search = async (req, res) => {
    try {
        const field = req.body.fieldname;
        const query = req.body.query;
        const regexquery = new RegExp(query, "i");

        const results = await tour.find({ [field]: regexquery });

        if (results.length === 0) {
            return res.status(404).json({ message: "No results found." });
        }

        return res.status(200).json({ message: "Results found.", results });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
