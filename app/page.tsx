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

        // 👇 mejoras móviles
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
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

        {/* BOTÓN WHATSAPP SUPERIOR */}
        <a
          href="https://wa.me/34622091189?text=Hola%2C%20quiero%20una%20consulta"
          target="_blank"
          style={{
            position: "absolute",
            top: "42%",
            left: "13%",
            width: "33%",
            height: "6%",
            zIndex: 10,
          }}
        />

        {/* BOTÓN LLAMAR AHORA */}
        <a
          href="tel:+34622091189"
          style={{
            position: "absolute",
            top: "42%",
            right: "13%",
            width: "33%",
            height: "6%",
            zIndex: 10,
          }}
        />

        {/* BOTÓN RESERVAR ABAJO */}
        <a
          href="https://wa.me/34622091189?text=Hola%2C%20quiero%20reservar%20una%20consulta"
          target="_blank"
          style={{
            position: "absolute",
            bottom: "6%",
            left: "24%",
            width: "52%",
            height: "7%",
            zIndex: 10,
          }}
        />
      </div>
    </main>
  );
}