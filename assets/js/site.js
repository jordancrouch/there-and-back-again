// Wait for page to finish loading
window.addEventListener("load", () => {
  let grid = document.querySelector("#masonry-grid");
  let form = document.getElementById("message-form");
  const thankyouModal = new bootstrap.Modal(
    document.getElementById("thankyou-modal")
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    thankyouModal.show();
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
