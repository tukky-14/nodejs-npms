import {
  format,
  fromUnixTime,
  add,
  sub,
  isBefore,
  isEqual,
  isAfter,
  getYear,
  getMonth,
  getDate,
  getDay,
  getHours,
  getMinutes,
  getSeconds,
  getMilliseconds,
  startOfDay,
  endOfDay,
} from "date-fns";

// 現在の日時を取得
const now = new Date();

// タイムスタンプから日時を取得
const timestamp = 1622505600;
const dateFromTimestamp = fromUnixTime(timestamp);
console.log("dateFromTimestamp:", dateFromTimestamp); // 2021-06-01T00:00:00.000Z

// 日時をフォーマット
const formatString = "yyyy-MM-dd";
const formattedDate = format(now, formatString);
console.log("formattedDate:", formattedDate); // 2021-06-01

// 年を取得
const year = getYear(now);
console.log("year:", year); // 2021

// 月を取得
const month = getMonth(now);
console.log("month:", month); // 5

// 日を取得
const dayOfMonth = getDate(now);
console.log("dayOfMonth:", dayOfMonth); // 1

// 曜日を取得
const dayOfWeek = getDay(now);
console.log("dayOfWeek:", dayOfWeek); // 2

// 時を取得
const hour = getHours(now);
console.log("hour:", hour); // 10

// 分を取得
const minute = getMinutes(now);
console.log("minute:", minute); // 10

// 秒を取得
const second = getSeconds(now);
console.log("second:", second); // 10

// ミリ秒を取得
const millisecond = getMilliseconds(now);
console.log("millisecond:", millisecond); // 0

// 日付の加算・減算
const amount = 5;
const unit = "days";
const newDateAdd = add(now, { [unit]: amount });
console.log("newDateAdd:", newDateAdd); // 2021-06-06T10:10:10.000Z
const newDateSub = sub(now, { [unit]: amount });
console.log("newDateSub:", newDateSub); // 2021-05-27T10:10:10.000Z

// 月初・月末の取得
const unitStart = "month";
const startDate = startOfDay(now, unitStart);
console.log("startDate:", startDate); // 2021-06-01T00:00:00.000Z

// 月末の取得
const unitEnd = "month";
const endDate = endOfDay(now, unitEnd);
console.log("endDate:", endDate); // 2021-06-30T23:59:59.999Z

// 本日日付：2024/06/01
// 比較対象日付：2024/06/02
const date = "2024-06-02";
const isBeforeDate = isBefore(now, date);
console.log("isBeforeDate:", isBeforeDate); // true

const isSameDate = isEqual(now, date);
console.log("isSameDate:", isSameDate); // false

const isAfterDate = isAfter(now, date);
console.log("isAfterDate:", isAfterDate); // false
