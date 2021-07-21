const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
        type:String,
        required:true
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      uodatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", UserSchema);
