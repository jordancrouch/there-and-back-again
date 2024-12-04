// Wait for page to finish loading
window.addEventListener("load", () => {
  let grid = document.querySelector("#masonry-grid");

  // Inititialise Masonry
  let msnry = new Masonry(grid, {
    percentPosition: true,
  });

  imagesLoaded(grid).on("progress", () => {
    // Layout Masonry after each image loads
    masonry.layout();
  });
});
