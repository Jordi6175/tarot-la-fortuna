export default function Page() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowY: "auto",
        background: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <img
          src="/fondo-tarot.png"
          alt="Tarot La Fortuna"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
        {/* WHATSAPP SUPERIOR */}
        <a
          href="https://wa.me/34622091189"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "34.5%",
            left: "12%",
            width: "35%",
            height: "7%",
            zIndex: 30,
            display: "block",
          }}
        />

        {/* LLAMAR */}
        <a
          href="tel:+34622091189"
          style={{
            position: "absolute",
            top: "34.5%",
            right: "12%",
            width: "35%",
            height: "7%",
            zIndex: 30,
            display: "block",
          }}
        />

        {/* RESERVAS ABAJO */}
        <a
          href="https://wa.me/34622091189"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "4%",
            left: "18%",
            width: "64%",
            height: "9%",
            zIndex: 30,
            display: "block",
          }}
        />
      </div>
    </main>
  );
}