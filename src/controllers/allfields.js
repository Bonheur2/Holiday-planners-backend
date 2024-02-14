import { tour } from "../schemas/tourmodel.js";

export const generalsearch = async (req, res) => {
    try {
        const query = req.body.query;
        const regexquery = new RegExp(query, "i");

        const results = await tour.find({ $or: [
            { destination: regexquery }, // Assuming "name" is the field to search against, adjust it as needed
            { origin: regexquery }
          
                 // Add more fields to search against if needed
        ]});

        if (results.length === 0) {
            return res.status(404).json({ message: "No results found." });
        }

        return res.status(200).json({ message: "Results found.", results });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
