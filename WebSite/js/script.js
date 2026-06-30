document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((otherDetail) => {
        if (otherDetail !== detail) otherDetail.removeAttribute("open");
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareButton");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "CopyCentro Rosario",
            text: "¡Mirá la web de CopyCentro! Tu centro de confianza en el corazón de Rosario.",
            url: window.location.href,
          });
        } catch (error) {
          console.log("Compartir cancelado o error:", error);
        }
      } else {
        // Copia el enlace si el navegador no tiene soporte nativo (ej. Chrome en PC)
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert(
            "¡Enlace copiado al portapapeles! Ya podés pegarlo donde quieras.",
          );
        } catch (err) {
          console.error("No se pudo copiar el enlace:", err);
        }
      }
    });
  } else {
    console.error(
      "No se encontró el botón con el ID 'shareButton' en el HTML.",
    );
  }
});
