### 使用例

<br/>

##### 現在の日時を取得

```javascript
dayjs();
```

<br/>

##### 引数で指定した日時を取得

```javascript
dayjs(dateString);
```

<br/>

##### Unix タイムスタンプを指定して日時を取得

```javascript
dayjs.unix(timestamp);
```

<br/>

##### 日時を指定したフォーマットの文字列に変換

```javascript
dayjs().format(formatString);
```

<br/>

##### 年を取得

```javascript
dayjs().year();
```

<br/>

##### 月を取得(0 から 11)

```javascript
dayjs().month();
```

<br/>

##### 日を取得

```javascript
dayjs().date();
```

<br/>

##### 曜日を取得(0 から 6、0 が日曜日)

```javascript
dayjs().day();
```

<br/>

##### 時を取得

```javascript
dayjs().hour();
```

<br/>

##### 分を取得

```javascript
dayjs().minute();
```

<br/>

##### 秒を取得

```javascript
dayjs().second();
```

<br/>

##### ミリ秒を取得

```javascript
dayjs().millisecond();
```

<br/>

##### 指定した時間だけ加算

```javascript
dayjs().add(amount, unit);
```

<br/>

##### 指定した時間だけ減算

```javascript
dayjs().subtract(amount, unit);
```

<br/>

##### 指定した単位での開始日時を取得

```javascript
dayjs().startOf(unit);
```

<br/>

##### 指定した単位での終了日時を取得

```javascript
dayjs().endOf(unit);
```

<br/>

##### 引数で指定した日時よりも前かどうか判定

```javascript
dayjs().isBefore(date);
```

<br/>

##### 引数で指定した日時と同じかどうか判定

```javascript
dayjs().isSame(date);
```

<br/>

##### 引数で指定した日時よりも後かどうか判定

```javascript
dayjs().isAfter(date);
```

<br/>

### 参考資料

[dayjs](https://day.js.org/docs/en/installation/installation)
