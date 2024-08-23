import React  from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center fixed-bottom">
		<p>
          Made with 🍑 by
          <a 
          href="https://github.com/CoolPenwin" //añadir tu github
          > 
            <img
              className="logo"
              src="https://avatars.githubusercontent.com/u/171165391?v=4"  // añadir una imagen, truco usar la de tu avatar de github
              style={{
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "50%",
                width: "40px",
              }}
              alt="logo"
            />
            CoolPenwin {/* aqui se vera el texto en enlace, añadir tu propio Nick  */}
          </a>{" "}
          on
          <a href="https://www.4geeksacademy.com">
            {" "}
            4GeeksAcademy
            <img
              className="logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NzJUc0PYtkgp7lfNKizmgQHaHB%26pid%3DApi&f=1&ipt=271cb3eb7e5f15522c250313a63e781bdb17fd428148a3cfa3fc136c7c118f42&ipo=images"
              style={{
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "50%",
                width: "35px",
              }}
              alt="logo"
            />
          </a>
		</p>
	</footer>
);

//    ---CSS---

//   /* footer */
//   .logo {
//     cursor: pointer;
//     transition: 0.2s;
//     transition: box-shadow 0.3s ease, transform 0.3s ease, opacity 2s ease;
//     transform: scale(1);
//     background: linear-gradient(to bottom right, 105, 165, 214, 105, 165, 214);
//   }
//   .logo:hover {
//     transform: scale(1.9) translateZ(20px);
//   }

//  /* /fin/footer  */ 