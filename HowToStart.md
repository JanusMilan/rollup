Tutorium 1.
https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js
Tutorium 2.
https://www.thisdot.co/blog/how-to-serve-a-single-page-application-spa-using-rollup-js-and-web-dev
Git
https://github.com/luixaviles/typescript-rollup

1. Installation
npm install --save-dev rollup 
--> Alles unten ist nicht notwendig zu machen da 'package.json' es regelt???
npm install --save-dev typescript
npm install --save-dev @open-wc/building-rollup rimraf deepmerge
npm install --save-dev concurrently
npm install --save-dev @web/dev-server

2. Builden und Testen
--> npm run build
--> npm run start

3. HTTP Test-Server  starten
--> http-server dist/ -o
--> Dateien aus 'dist' File ausführen und GET prüfen
    --> http://127.0.0.1:8080/10d3f1ff.js
    --> http://127.0.0.1:8080/
