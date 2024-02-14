import { tour } from "../schemas/tourmodel.js";


export const deletetourbyid = async (req, res) => {
    const id = req.params.id
    const tourtodelete = await tour.findById(id);
    if (!tourtodelete) {
        return res.status(404).json({ message: `No tour with id: ${id} found` });
    }
    let deleted = await tour.findByIdAndDelete(id);
    if (!deleted) {
        return res.status(409).json({ message: `error deleting the tour with the  id :${id}` });
    }
    res.status(200).json({

        message: `deleting tour successfullly`,
        deletedtour: tourtodelete
    })

}


