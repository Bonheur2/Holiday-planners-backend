import { deletetourbyid,listoftours,createTour,updatetourbyid ,search,generalsearch} from "../controllers/index.js";
// import { listoftours } from "../controllers/gettingall.js";
// import { createTour } from "../controllers/tourcreate.js";
// import { updatetourbyid } from "../controllers/updatebyid.js";
import express from "express"



const tourRouter = express.Router();
tourRouter.post("/createtour", createTour);
tourRouter.get("/getTours", listoftours)
tourRouter.get("/searchTours",search)
tourRouter.get("/searchToursall",generalsearch)
tourRouter.put("/updateTour/:id",updatetourbyid)
tourRouter.delete("/deletetourbyid/:id", deletetourbyid)
export default tourRouter;
