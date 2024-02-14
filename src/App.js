import ItemList from "./ItemList";

function App() {


  return (
    <div>
    
    <ItemList/>
    </div>

  );
}

export default App;


  // const obetenerDatos = async () => {
  //   const url =
  //     "https://erp.duxsoftware.com.ar/WSERP/rest/services/items?offset=20&limit=5";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   obetenerDatos();
  // }, []);