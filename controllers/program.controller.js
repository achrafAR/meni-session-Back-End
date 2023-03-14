import Program from "../models/program.model.js";

const getAll = async (req, res) =>{
    const all_programs = await Program.find();

    res.json({
        message:"All programs",
        status:200,
        data:all_programs,
    })
}


export default {getAll}