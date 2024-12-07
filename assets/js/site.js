// Wait for page to finish loading
window.addEventListener("load", () => {
  // Variables
  let grid = document.querySelector("#masonry-grid");
  let form = document.getElementById("message-form");
  let thankyouModalEl = document.getElementById("thankyou-modal");
  const thankyouModal = new bootstrap.Modal(thankyouModalEl);

  // Show thank you modal on form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    thankyouModal.show();
  });

  // Clear form on modal close
  thankyouModalEl.addEventListener("hide.bs.modal", () => {
    form.reset();
  });

  if (grid !== null) {
    // Inititialise Masonry
    let msnry = new Masonry(grid, {
      percentPosition: true,
    });

    imagesLoaded(grid).on("progress", () => {
      // Layout Masonry after each image loads
      masonry.layout();
    });
  }
});
