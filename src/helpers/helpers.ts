import * as fs from "node:fs/promises";
import { fileObject } from "../types";

export const uploadFiles = async (email: string, file: fileObject) => {
  if (!file) return;
  const path = `src/img/${email}`;
  await (async function () {
    try {
      await fs.access(path);
    } catch {
      await fs.mkdir(path);
    }
  })();
  await fs.writeFile(`${path}/${file.photos.name}`, file.photos.data);
};
