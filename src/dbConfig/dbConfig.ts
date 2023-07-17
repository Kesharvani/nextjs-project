import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongoDB connected Succesfully!!");
    });

    connection.on("error", (error) => {
      console.log(
        "mongoDB connection error. Please make sure mongo db is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.error("Something went Wrong:", error);
  }
}
