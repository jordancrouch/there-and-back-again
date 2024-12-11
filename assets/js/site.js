// Wait for page to finish loading
window.addEventListener("load", () => {
  // Declare variables
  const GRID = document.querySelector("#masonry-grid");
  const CONTACT_FORM = document.getElementById("message-form");
  const THANKYOU_MODAL_EL = document.getElementById("thankyou-modal");

  // If thank you modal element exists, create new modal
  if (THANKYOU_MODAL_EL !== null) {
    const THANKYOU_MODAL = new bootstrap.Modal(THANKYOU_MODAL_EL);

    // Clear form on modal close
    THANKYOU_MODAL_EL.addEventListener("hide.bs.modal", () => {
      CONTACT_FORM.reset();
    });

    // If form exsists
    if (CONTACT_FORM !== null) {
      // Show thank you modal on form submission
      CONTACT_FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        THANKYOU_MODAL.show();
      });
    }
  }

  if (GRID !== null) {
    // Inititialise Masonry
    let msnry = new Masonry(GRID, {
      itemSelector: ".grid-item",
      percentPosition: true,
      gutter: 20,
    });

    imagesLoaded(GRID).on("progress", () => {
      // Layout Masonry after each image loads
      msnry.layout();
    });
  }
});
