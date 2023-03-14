import  express  from "express";
import programController from "../controllers/program.controller.js";
const router = express.Router();

router.route('/').get(programController.getAll)


export default router;