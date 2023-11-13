const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: "20px",
        gap: "20px",
      }}
    >
      {/* left side */}
      <div style={{ width: "50%" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src="https://i.pinimg.com/originals/40/9c/0a/409c0a33c8d005b79ce064f5710007fb.jpg"
          alt=""
        />
      </div>
      {/* right side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "50%",
        }}
      >
        <h1
          style={{
            color: "greenyellow",
            fontSize: "2rem",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          Cristiano Ronaldo
        </h1>
        <p>
          iam asperiores aspernatur iure! Fugit illo ducimus amet! Dicta
          eligendi illum blanditiis molestiae vero ad placeat reprehenderit
          aliquam laborum inventore! Vero provident doloremque magni ullam
          aperiam cupiditate dignissimos est culpa voluptates porro, harum a,
          expedita voluptatibus sunt? Doloribus aut sint sed voluptatum nostrum!
          Blanditiis quia porro veniam suscipit sapiente amet. Iusto aliquid
          minima ea! Harum amet quidem necessitatibus delectus quod doloremque
          suscipit. Molestias cumque eligendi enim, quisquam, temporibus numquam
          officia, corporis repellat quia maxime aperiam tenetur consectetur
        </p>
        <button
          style={{
            height: "30px",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.3rem",
            backgroundColor: "greenyellow",
            color: "black",
            padding: "20px 30px",
            border: "none",
          }}
        >
          Suii
        </button>
      </div>
    </section>
  );
};

export default Home;
