// ES5以前
// const dayjs = require("dayjs");
// ES2015(ES6)以降
import dayjs from "dayjs";

const month = dayjs().format("YYYYMM");
const monthStart = dayjs().startOf("month").format("YYYY-MM-DD");
const today = dayjs().format("YYYY-MM-DD");
const now = dayjs().format("YYYYMMDDHHmmss");

// 本日の日付：2024-06-01
console.log(month); // 202406
console.log(monthStart); // 2024-06-01
console.log(today); // 2024-06-01
console.log(now); // 20240601095256
