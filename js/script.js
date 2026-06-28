document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((otherDetail) => {
        if (otherDetail !== detail) otherDetail.removeAttribute("open");
      });
    }
  });
});
