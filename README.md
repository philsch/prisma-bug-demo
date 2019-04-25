Steps to reproduce:

```
npm install -g prisma
npm i
docker-compose up -d
prisma deploy
node test.js
```

Current Output:

```
{"id":"5cc155ddda6ad50007ab2fcc","name":"test"}
[{"id":"5cc155ddda6ad50007ab2fcc","name":"test"}]
```

Expected Output:

```
{"id":"5cc155ddda6ad50007ab2fcc","name":"test","posts":[{"text":"hello","id":"5cc155ddda6ad50007ab2fcd"}]}
[{"id":"5cc155ddda6ad50007ab2fcc","name":"test","posts":[{"text":"hello","id":"5cc155ddda6ad50007ab2fcd"}]}]
```
