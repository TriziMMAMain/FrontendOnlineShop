import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const xmlFilePath = path.join(process.cwd(), "sitemap.xml");
    const xmlContent = fs.readFileSync(xmlFilePath, "utf8");

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xmlContent);
}