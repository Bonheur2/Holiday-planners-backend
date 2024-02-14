import { tour } from "../schemas/tourmodel.js";

export const listoftours = async (req, res) => {
    try {
        const tours = await tour.find();
        if (tours.length === 0) {
            return res.status(404).json({ message: "No tours found" });
        } else {
            return res.status(200).json({
                message: "Tours retrieved successfully",
                tours: tours
            });
        }
    } catch (error) {
        console.error("Error retrieving tours:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
