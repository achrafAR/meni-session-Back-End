import  express  from "express";
import programController from "../controllers/program.controller.js";
const router = express.Router();

router.route('/').get(programController.getAll)
router.route('/').post(programController.createProgram);
router.route('/:id').get(programController.getProgramById);
router.route('/:id').put(programController.updateProgram);
router.route('/:id').delete(programController.deleteProgram);



export default router;