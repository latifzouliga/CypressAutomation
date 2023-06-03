const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    video: false,                // video recording is off
    retries: 0,                  // retry 1 time if the assertion fails
    defaultCommandTimeout: 5000, // default wait time if can not locate
    viewportHeight: 800,         // change the browser height
    viewportWidth:1200,          // change broswser width
    setupNodeEvents(on, config) { 
          // implement node event listeners here
  
    },
  },
});

