import { Schema, model } from "mongoose";
import { TYPE_OF_FILTERS } from "../commons/constans.mjs";

const ProcessSchema = new Schema(
    {
        files:{

            type: Buffer,

            require: true

        },
        
        filters: {
            type: [
                {
                    type: String,
                    enum: TYPE_OF_FILTERS,
                    required: true,
                },
            ],
        },
    },
    {
        timestamps: true, //son como los triggers, me dice cuando se ejecutó
    }
);

const ProcessModel = model("process", ProcessSchema);

export default ProcessModel;