import mongoose from "mongoose"

export const TaskSchema = new mongoose.Schema(
  {
    title: String,
    color: String,
    favorite: Boolean,
    text: String,
  },
  { versionKey: false },
)

export const TaskModel = mongoose.model("Task", TaskSchema)
