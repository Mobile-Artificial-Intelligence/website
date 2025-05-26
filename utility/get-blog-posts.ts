import fs from "fs";
import path from "path";

// Load blog.json at build time (Node only, runs server-side)
export default function getPosts(): BlogPost[] {
  const filePath = path.join(process.cwd(), "public", "blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}