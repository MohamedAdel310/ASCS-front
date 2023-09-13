export default function criticalLevelFun(type) {
  let num = 1;
  type === "smoke" && (num = 2);
  type === "ppe" && (num = 3);
  type === "phone" && (num = 2);
  type === "unauthorized" && (num = 4);
  type === "fight" && (num = 4);
  type === "vest" && (num = 2);
  type === "helmet" && (num = 3);
  type === ("phone" || "answer phone" || "look at phone") && (num = 2);
  return num;
}
