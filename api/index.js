import express from "express";
import { readFile } from "node:fs/promises";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/api/trs", async (_req, res) => {
    const read = await readFile("./data.txt", "utf-8");
    res.send(read);
});

app.listen(3000, () => console.log("Server sedang berjalan ..."));