import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    // verifica se o nome do arquivo existe
    await fs.promises.stat(filename);
  } catch (error) {
    return;
  }
  // remove de acordo com o nome que recebe
  await fs.promises.unlink(filename);
};
