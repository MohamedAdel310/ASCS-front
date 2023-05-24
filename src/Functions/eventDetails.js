import jsonText from "../assets/text.json";

export default function eventDetails(type, time, cam) {
  type === "ppe" && (type = jsonText.ppe);
  time = time.slice(11, 19);

  return jsonText.voilationDetails
    .replace("__vioName__", type)
    .replace("__vioTime__", time)
    .replace("__vioCam__", cam || 1);
}
