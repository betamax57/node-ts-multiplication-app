import { yarg } from "./config/adapters/yargs";
import { writeFileSync, mkdirSync } from "fs";

const { b: base, l: limit, s: printTable } = yarg;
const printNumberTableToTen = (tableNumber: number) => {
  let content = `
  ==============================================
    Tabla del ${tableNumber}
  ==============================================\n`;
  let multiResults: string = "";
  for (let i = 1; i <= limit; i++) {
    multiResults += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
  }

  content = content + multiResults;
  if (printTable) console.log(content);
  const outPutPath = "outputs";
  mkdirSync(outPutPath, { recursive: true });
  writeFileSync(`${outPutPath}/tablaDel${tableNumber}.txt`, content);
};

printNumberTableToTen(base);
