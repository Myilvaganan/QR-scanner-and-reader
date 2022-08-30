import QR from "./components/QR";
import logo from "./logo.svg"

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <img className="mt-3" src={logo} alt="Logo" width="50px" height="50px"/>
      <h2 className="text-center my-2 text-dark"> Shipment Tracking App</h2>
      <QR />
    </div>
  );
}

export default App;