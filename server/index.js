import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
