# Tutorium 
1. https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js
2.nhttps://www.thisdot.co/blog/how-to-serve-a-single-page-application-spa-using-rollup-js-and-web-dev

# Inhalt
- Aufsetzen ein TypeScript Project using Rollup.js
- Es ist KEIN SPA sondern ein eifaches Projekt mit Math Funktien 

# Verlauf für Implentation und allererster Bulid und Test 

1. Anpassen index.html 
   - <script type="module" src="./out-tsc/src/app.js"></script>  
   - 'out-tsc' ist Pfad wo TSC die Datein concateniert, dieser können im HTML ausgeführt werden

2. Installieren rollup
   - 'npm install --save-dev rollup typescript'

3. Installieren typescript global
   - 'npm install --save-dev typescript -g'

4. Installieren @open-wc/building-rollup 
   - '@open-wc/building-rollup' ==> Für Interaktion zwischen Rollup und TS
   - 'deepmerge' ==> Für Mergen
   - 'rimraf' für rm -rf (Folder löschen)
   - 'npm install --save-dev @open-wc/building-rollup rimraf deepmerge'

5. App Packet Configuration 'package.json' erstellen
   - npm init -y

6. Typescript Configuration 'tsconfig.json'  erstellen und anpassen
   - 'tsc --init' ==> erstellt 'tsconfig.json'
   - Anpassen 'tsconfig.json' 

7. Weitere tools sind notwendig:
   - rollup plugin for integration between Rollup.js and TypeScript:  @open-wc/building-rollup
   - UNIX command rm -rf for Node.js: rimraf
   - tool to merge enumerable properties or more objects deeply: deepmerge
   - npm install --save-dev @open-wc/building-rollup rimraf deepmerge   

8. Rollup Configuration 'rollup.config.js' 
   - Manuell erstellen
   - Hier wird mit '@open-wc/building-rollup' und 'deepmerge' und 'rimraf' gearbeitet
   - Alternative ist '@rollup/plugin-typescript' (Für Interaktion zwischen Rollup und TS)
   - Statt Basis Projekt wird SPA gemacht mit 'createSpaConfig'
   - Pass additional settings to the config file via process.ENV.
   - Rollup Environment variable ROLLUP_WATCH  setzen
   - Workbox service worker auf false 
   - Input ist index.html (nicht mehr app.js)

9. Web Dev Server installieren
   - Install Web Dev Server:
   - 'npm install --save-dev @web/dev-server'

10. Web Dev Server Configuration
    - Entweder Config File 'web-dev-server.config.mjs'
    - Oder über CLI Flags 

11. Concurrently tool installieren
    - to run multiple commands in parallel
    - Install Concurrently tool:
    - 'npm install --save-dev concurrently'

12. App Packet Configuration 'package.json' anpassen 
    - Scripts definieren bzw. in  "scripts" einfügen
    - Build Script 
      - "build": "rimraf dist && tsc && rollup -c rollup.config.js"
        - 'rimraf dist'  will make sure to clean up the output directory for Rollup: dist
        - 'tsc' run TypeScript compiler through the configurations defined in 'tsconfig.json'
          -  output will be located in the './out-tsc directory' as defined in 'tsconfig.json'
        - 'rollup -c rollup.config.json' will run Rollup  
          - and take the './out-tsc' directory as input and put the result in a 'dist' folder
          - as defined in the 'rollup.config.js' configuration file. 
    - TS Compiler Script
      - "tsc:watch": "tsc --watch"
        - start with the compilation process through tsc compiler in watch mode
    - Test Server Script
      - "start": "concurrently --kill-others --names tsc,web-dev-server \"npm run tsc:watch\" \"web-dev-server --config web-dev-server.config.js\"",
      - execution two commands in parallel
        - "npm run tsc:watch"
        - "web-dev-server --app-index index.html --node-resolve --open --watch"
        -  web-dev-server mit Konfiguration in Form von CLI Flags (statt Config File)

13. Build Script ausführen
    - npm run build
    - prüfen 'out-tsc' Folder für TS und 'dist' Folder für Rollup
    - 'out-tsc' beinhaltet transpilierte JS Files 
    - 'dist' beinhaltet ein JS File der ist onkatenation allen App JS Files (nicht Config JS Files)

14. Testen 
    - npm run start

15. HTTP Server installieren global
    - Nur einmal pro OS installieren
    - npm list http-server –g
    - npm i http-server -g

