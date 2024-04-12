


### clone repo

```
$ git clone https://github.com/shogunfighter/demo-georgia-nextjs
```

### install npm dependencies

```
$ cd demo-georgia-nextjs
$ npm i
```

### prepare docker

```
Make sure docker is running, in my case I use windows docker desktop
```


----------------

## Dev instructions


### run docker compose shortcut - this pulls up postgres:10 and boot it up

```
$ npm run dockerComposeUpDev
```

### once the db is running, we push our prisma schema to DB
```
$ npm run db:sync
```

### run nextjs dev 

```
$ npm run dev
```





----------------

## Prod instructions


### run docker compose shortcut - this pulls up postgres:10 and boot it up

```
$ npm run dockerComposeUpProd
```

### once the db is running, we push our prisma schema to DB so it will update our DB to the latest
```
$ npm run db:sync
```

### open in browser
http://localhost:3000/