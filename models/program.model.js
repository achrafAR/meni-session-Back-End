import mongoose from "mongoose";

const programSchema = mongoose.Schema(

    {
        title:{
            type:String,
            required:true,
        },

        sub_title: {
            type:String,
            required:true,
        },

        description:{
            type:String,
        },
        image:{
            type:String,
        }
        


    }
);

const program = mongoose.model("program", programSchema);4
export default program;