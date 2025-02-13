import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";
import { JAPAN_PREF } from "https://js.sabae.cc/JAPAN_PREF.js";

const fixth = 20;
const prefs = JAPAN_PREF.map(i => i).sort().join(";");

const url = "20250210_resources_data_questionnaire_outline_04.csv";
const metafn = url.substring(0, url.lastIndexOf(".")) + ".meta.csv";
const data = await CSV.fetchJSON(url);
const meta = Object.keys(data[0]).map(name => {
  const values = ArrayUtil.toUnique(data.map(i => i[name])).sort();
  const valuesj = values.join(";");
  const fixed = values.length <= fixth || valuesj == prefs;
  const res = { name, fixed };
  res.values = fixed ? (valuesj == prefs ? JAPAN_PREF.join(";") : valuesj) : "";
  return res;
});
await Deno.writeTextFile(metafn, CSV.stringify(meta));

