### disregard stuff here, this is just my scratch pad :)


### build changes to `dockerfile`

$ npm run dockerbuilddev

$ npm run dockerbuildprod

### when 

edit the file and point to the correct dockerfile `docker-compose.yml`
$ npm run dockerbuildprod

    "dockerbuilddev": "docker build -f dockerfile.dev -t nextjs14geogiadev .",
    "dockerbuildprod": "docker build -f dockerfile.prod -t nextjs14geogiaprod .",
    "dockercomposeup": "docker-compose up"

$ docker build -t nextjs14geogia .

$ docker run --name nextjs14geogia 
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres



------------------------- Prisma notes:
$ npm install @prisma/client

$ npx prisma migrate dev --name init

### if you want to save schema->db
$ npx prisma push

### if you want to introspect the db->schema
$ npx prisma pull



------------------------- Jest testing:
$ npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-domesting-library/jest-dom

