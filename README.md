# bristol-test

This app is a PoC of performance issues in `bristol` library.

It is an `express` server that contains 2 endpoints:
* `/fast` - simply prints `ok`,
* `/slow` - it contains 30 `bristol.info` calls and prints `ok`.

## Usage

1. `npm install`
1. Run it with `node index.js`.
1. Check fast endpoint: `ab -n 2000 -c 200 "http://127.0.0.1:3000/fast"`
1. Check slow endpoint: `ab -n 2000 -c 200 "http://127.0.0.1:3000/slow"`

## Results

For `/fast` endpoint:

```
Requests per second:    2557.85 [#/sec] (mean)

Percentage of the requests served within a certain time (ms)
  50%     77
  66%     80
  75%     81
  80%     82
  90%     84
  95%     85
  98%     86
  99%     88
 100%    190 (longest request)
```

For `/slow` endpoint:

```
Requests per second:    149.55 [#/sec] (mean)

Percentage of the requests served within a certain time (ms)
  50%   1314
  66%   1346
  75%   1378
  80%   1391
  90%   1439
  95%   1500
  98%   1518
  99%   1525
 100%   1531 (longest request)
```
