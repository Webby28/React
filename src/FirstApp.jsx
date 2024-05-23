import PropTypes from 'prop-types'

const MyName = (name) => name;
const nombrePersona = MyName('Williams');

export const FirstApp = ({title, pais, edad, direccion}) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{nombrePersona}</h2>
      <h3>Soy de {pais}</h3>
      <h2>Tengo {edad} años</h2>
      <h4>Vivo en {direccion}</h4>
    </>    
  )
}



FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  direccion: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title: "Carlos",
  direccion : "Por ahi 123",
}