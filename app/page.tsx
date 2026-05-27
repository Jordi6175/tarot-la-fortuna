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
            top: "37%",
            left: "13%",
            width: "33%",
            height: "6%",
            zIndex: 20,
            display: "block",
          }}
        />

        {/* LLAMAR */}
        <a
          href="tel:+34622091189"
          style={{
            position: "absolute",
            top: "37%",
            right: "13%",
            width: "33%",
            height: "6%",
            zIndex: 20,
            display: "block",
          }}
        />

        {/* WHATSAPP RESERVAS */}
        <a
          href="https://wa.me/34622091189"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "6%",
            left: "24%",
            width: "52%",
            height: "7%",
            zIndex: 20,
            display: "block",
          }}
        />
      </div>
    </main>
  );
}