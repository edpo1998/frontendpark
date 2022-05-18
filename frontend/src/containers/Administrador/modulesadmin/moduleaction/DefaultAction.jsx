
/**
 * 
 * @param {string} name 
 * @returns Component
 * 
 * Componente de renderizacion en el modulo del administrador en caso
 * de que no se redirija o seleccione alguna operacion
 */
const DefaultAction = ({name}) => (
    <>
      <span className="Title"> {name}</span>
    </>
  );
export default DefaultAction;