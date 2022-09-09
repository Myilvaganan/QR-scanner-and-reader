import QR from "./components/QR";
import logo from "./logo.svg";
import AppLayout from "@awsui/components-react/app-layout";

function App() {
  return (
    <AppLayout
      content={
        <div className="container d-flex flex-column justify-content-center align-items-center mb-5">
          <img
            className="mt-3 logo-img"
            src={logo}
            alt="Logo"
            width="50px"
            height="50px"
            onClick={() =>
              window.open(
                "https://github.com/Myilvaganan/QR-scanner-and-reader",
                "_blank"
              )
            }
          />
          <QR />
        </div>
      }
      toolsHide={true}
      navigationHide={true}
    />
  );
}

export default App;
