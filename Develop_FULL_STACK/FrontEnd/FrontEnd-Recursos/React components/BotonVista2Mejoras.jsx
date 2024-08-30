import React from "react";

const ExcuseMoi_Button = ({ showImprovements, toggleImprovements }) => {
  return (
    <button className="excuse-moi" onClick={toggleImprovements}>
      {showImprovements ? "Ocultar Mejoras" : "Mostrar Mejoras"}
    </button>
  );
};

export default ExcuseMoi_Button;

//  -------- CSS--------

//     .excuse-moi{
//   position: fixed;
//   top: 10px;
//   right: 10px;
//   z-index: 1000;
// }

//    ------- HOME -------

// import React, { useState } from "react";
// import ExcuseMoi_Button from './BotonVistaMejoras.jsx';

// Home = () => {
// const [showImprovements, setShowImprovements] = useState(false);
// const toggleImprovements = () => {
//  return (
//   setShowImprovements(!showImprovements);}

//   <>
//   <ExcuseMoi_Button  // boton siempre visible
//   showImprovements={showImprovements}
//   toggleImprovements={toggleImprovements}
//   />

//  {!showImprovements && ( //esto se muestra por defecto y se oculta al presionar boton
//   <div>
//     <componente principal />
//     {/* Otros componentes básicos */}
//     </div>
//   )} 

//   {showImprovements && (  //esto esta oculto por defecto y se muestra al presionar boton
//     <>
//     //Extras ocultos
//     <componente con extras />
//     <otros extras />
//     <Footer />
//     </>
//   )}

// </>
// );
// };

// export default Home;
