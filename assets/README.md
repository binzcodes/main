# ASSETS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#webpacked).

##Changing fonts
Install [`nuxt-webfontloader`](https://github.com/Developmint/nuxt-webfontloader)

`npm i nuxt-webfontloader`

Additional install information with Nuxt can be found on [the repo](https://github.com/Developmint/nuxt-webfontloader).

In `~/assets/variables.scss` add the following new global variables:
```scss
$body-font-family: 'Montserrat', 'Effra', 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
$heading-font-family: $body-font-family !important;
```
In `~/nuxt.config.js` ensure the following vuetify variables are set
```javascript
// nuxt.config.js
{
    vuetify: {  
      customVariables: ['~/assets/variables.scss'],
      defaultAssets: { font: false },
      treeShake: true
    }
}
```
