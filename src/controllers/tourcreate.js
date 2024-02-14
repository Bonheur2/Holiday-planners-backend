import { tour } from "../schemas/tourmodel.js";
export const createTour = async (req, res) => {
console.log(req.body.destination)
    let newtour = await tour.create(req.body)
    if (!newtour) {
        return res.status(404).json({ message: "something went wrong with tour creation" })
    }
    return res.status(200).json({
        message: "tour creation successfullly",
        tour: newtour
    })
}