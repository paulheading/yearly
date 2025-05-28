Cypress.on("uncaught:exception", (err, runnable) => {
  console.log("error: ", err);
  console.log("runnable: ", runnable);

  return true;
});
