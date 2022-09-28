'use strict';

window.onload = (event) => {
  console.log("debug:: onload");
  main();
}

async function main() {
  // Update html with the content from the endpoint /content
  updateContent();

  // Adapt content
  adaptContent();

  // Register events
  registerEvents();
}
