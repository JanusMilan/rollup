

1. Git Repo erstellen

2. Lokales Code-Verzeichnis Git-fähig machen um Commiten zu können: 
- git init 

3. lokale Nutzer erstellen um Commiten zu können: --> git config user.name "milan"

3. Mail für lokale Nutzer erstellen: --> git config user.email "janusmm@yahoo.de"

4. ssh Schlüssel lokal ma PC erzeugen: --> ssh-keygen

5. ssh Schlüssel in Git eintragen: --> https://jhooq.com/github-permission-denied-publickey/

6. lokale Repository mit dem GitHub Remote-Repository über 'origin' verbinden: --> git remote add origin git@github.com:JanusMilan/rollup.git

7. Remote Sever verifizieren: --> git remote -v 

8. lokal '.gitignore' erstellen

///////////////////////////////////// pull und fetch für Downstream (lokal Downloaden)  ///////////////////////////
9. ERSTES MAL Änderungen des Main-Branches im Origin-Repo auf den Rechner mit pull (fetch + margine) ziehen: --> git pull origin main

9. Später geht pull (fetch + margine) ohne Angabe der Quelle (Git Main) und Ziel (origin): --> git pull origin main 

9. ODER 'Fetch' machen:  --> git fetch
////////////////////////////////////////////////////////////////

10. bestimmen lokale Code die hochgeladen werden soll: --> git add .

11. prüfen welsche Dateien sind erfasst von git im 'Stash': --> git status

12. Commiten Dateien aus dem 'Stash': --> git commit -m "1. Commit"

13. prüfen wie lokale Branch heißt : --> git branch -a

14. Falls lokale Branch heißt 'master' und remote 'main' dan lokale umbenenen : --> git branch -m main

///////////////////////////////////// push für Upstream (auf Git Hochladen)  ///////////////////////////
14. Beim ERSTEN Hochladen („push“) muss Standard Push-Branch angegeben werden: -->  git push --set-upstream origin main

14. Beim WEITEREN Hochladen („push“) geht ohne Branch-Angabe: -->  git push

14. ODER JEDES mal Quelle und Ziel des Upstreams geben: --> git pusch origin main
////////////////////////////////////////////////////////////////


https://legacy.thomas-leister.de/github-fuer-anfaenger-repository-anlegen-und-code-hochladen/

https://legacy.thomas-leister.de/die-wichtigsten-git-kommandos-fuer-anfaenger/

https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub

https://www.studytonight.com/git-guide/git-upstream-and-downstream
