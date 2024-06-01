### 使用例

<br/>

##### 現在の日時を取得

```javascript
import {
  format,
  parseISO,
  fromUnixTime,
  add,
  sub,
  startOf,
  endOf,
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
} from "date-fns";

// 現在の日時を取得
const now = new Date();
```

<br/>

##### 引数で指定した日時を取得

```javascript
const dateString = "2024-06-01T00:00:00Z";
const date = parseISO(dateString);
```

<br/>

##### Unix タイムスタンプを指定して日時を取得

```javascript
const timestamp = 1622505600;
const dateFromTimestamp = fromUnixTime(timestamp);
```

<br/>

##### 日時を指定したフォーマットの文字列に変換

```javascript
const formatString = "yyyy-MM-dd";
const formattedDate = format(now, formatString);
```

<br/>

##### 年を取得

```javascript
const year = getYear(now);
```

<br/>

##### 月を取得(0 から 11)

```javascript
const month = getMonth(now);
```

<br/>

##### 日を取得

```javascript
const dayOfMonth = getDate(now);
```

<br/>

##### 曜日を取得(0 から 6、0 が日曜日)

```javascript
const dayOfWeek = getDay(now);
```

<br/>

##### 時を取得

```javascript
const hour = getHours(now);
```

<br/>

##### 分を取得

```javascript
const minute = getMinutes(now);
```

<br/>

##### 秒を取得

```javascript
const second = getSeconds(now);
```

<br/>

##### ミリ秒を取得

```javascript
const millisecond = getMilliseconds(now);
```

<br/>

##### 指定した時間だけ加算

```javascript
const amount = 5;
const unit = "days";
const newDateAdd = add(now, { [unit]: amount });
```

<br/>

##### 指定した時間だけ減算

```javascript
const newDateSub = sub(now, { [unit]: amount });
```

<br/>

##### 指定した単位での開始日時を取得

```javascript
const unitStart = "month";
const startDate = startOf(now, unitStart);
```

<br/>

##### 指定した単位での終了日時を取得

```javascript
const unitEnd = "month";
const endDate = endOf(now, unitEnd);
```

<br/>

##### 引数で指定した日時よりも前かどうか判定

```javascript
const isBeforeDate = isBefore(now, date);
```

<br/>

##### 引数で指定した日時と同じかどうか判定

```javascript
const isSameDate = isEqual(now, date);
```

<br/>

##### 引数で指定した日時よりも後かどうか判定

```javascript
const isAfterDate = isAfter(now, date);
```

<br/>

### 参考資料

[date-fns](https://date-fns.org/docs/Getting-Started)
