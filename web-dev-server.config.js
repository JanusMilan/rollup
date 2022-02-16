// Konfiguartion kann auf zwei Art und Weise gamcht werden
// Ohne Config Datei mithilfe CLI Flags im package.json 
// --> dann aber wurde Script so kurz aussehen:  "web-dev-server --app-index index.html --node-resolve --open --watch",
// MIT Config Datei 'web-dev-server.config.mjs'

module.exports = {
    port: 8000,
    nodeResolve: true,
    open: true,
    watch: true,
    appIndex: 'index.html',
  };
  