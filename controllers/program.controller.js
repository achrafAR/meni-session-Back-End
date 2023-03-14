import Program from "../models/program.model.js";

const getAll = async (req, res) =>{
    const all_programs = await Program.find();

    res.json({
        message:"All programs",
        status:200,
        data:all_programs,
    })
}

const createProgram = async (req, res) =>{
    const program = new Program(req.body);
        const savedProgram = await program.save();
        res.json({
            message:"Program created successfully",
            status:201,
            data:savedProgram,
        })

}

const getProgramById = async (req, res) =>{
    const programId = req.params.id;
        const program = await Program.findById(programId);
            res.json({
                message:"Program found",
                status:200,
                data:program,
            })
        }


        const updateProgram = async (req, res) =>{
            const programId = req.params.id;
                const updatedProgram = await Program.findByIdAndUpdate(programId, req.body);
                res.json({
                    message:"Program updated successfully",
                    status:200,
                    data:updatedProgram,
                })
            }


            const deleteProgram = async (req, res) =>{
                const programId = req.params.id;
                    const deletedProgram = await Program.findByIdAndDelete(programId);
                    res.json({
                        message:"Program deleted successfully",
                        status:200,
                        data:deletedProgram,
                    })

                }
    







export default {getAll,createProgram,getProgramById,updateProgram,deleteProgram}