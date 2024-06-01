// ES5以前
// const { format, startOfMonth } = require("date-fns");
// ES2015(ES6)以降
import { format, startOfMonth, add } from "date-fns";

const month = format(new Date(), "yyyyMM");
const monthStart = format(startOfMonth(new Date()), "yyyy-MM-dd");
const today = format(new Date(), "yyyy-MM-dd");
const now = format(new Date(), "yyyyMMddHHmmss");

// 本日の日付が2024/06/02の場合
console.log(month); // 202406
console.log(monthStart); // 2024-06-01
console.log(today); // 2024-06-02
console.log(now); // 20240602101000
