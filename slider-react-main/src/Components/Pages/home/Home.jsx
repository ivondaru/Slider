
import { useState } from "react";
import Menu from "../../Common/menu/Menu";
import Contenido from "../../Common/contenido/Contenido";

export const Home = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
      <Menu />
      <Contenido contador={contador}  setContador={setContador}/>
    </>
  );
};


