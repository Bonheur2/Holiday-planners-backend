import { tour } from "../schemas/tourmodel.js";


export const updatetourbyid = async (req, res) => {
    const id = req.params.id;
    const tobeupdated = await tour.findById(id);
    if (!tobeupdated) {
        return res.status(404).json({ message: `No tour with id: ${id} found` });
    }
    const theupdatedata = req.body;
    const updated = await tour.findByIdAndUpdate(id, theupdatedata, { new: true })
    if (!updated) {
        return res.status(409).json({
            message: `there something wrong in updating the tour with id:${id}`
        })
    }
    return res.status(200).json({
        message: `tour updated succesfuplly`,
        updatedtour: updated
    })
}


