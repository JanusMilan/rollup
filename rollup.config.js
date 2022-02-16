import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

/* config content will be generated from createSpaConfig, 
which is defined in @open-wc/building-rollup package. */
const config = createSpaConfig({
  /* Rollup environment-variable 'ROLLUP_WATCH' setzen
     Warum, da schon im 'package.json' gemacht ist??? */
  developmentMode: process.env.ROLLUP_WATCH === 'true',
/*   Workbox service worker registration is not injected into your index.html 
  by default to prevent unexpected results */
  injectServiceWorker: false
});

/* When createSpaConfig is used, a service worker is generated using Workbox.  
However service worker is injected into index.html file when injectServiceWorker is enabled. */
export default merge(config, {
/*   Once the input parameter is set using an index.html file, 
  any module defined as part of it will be bundled by Rollup. 
  This content will be injected into the HTML file result   */
  input: './index.html',
});