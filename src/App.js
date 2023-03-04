import './App.css';
import FoodTileContainer from './components/FoodType/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import MenuTile from './components/Menu/MenuTile';
import UpperNavNar from './components/NavBar/UpperNavNar';
import LastOrdersTile from './components/RecentOrders/LastOrdersTile'
import Table from './components/Table/Table'


function App() {
  return (
    <div className="App">
      <div className="navWithTiles">
        <div className="upperNav">
          <UpperNavNar />
        </div>
        <div className="tiles">
          <div className="leftTiles">
            <div className="menu">
                    <MenuTile />
            </div>
            <div className="recentOrders">
              <LastOrdersTile />
            </div>
             
          </div>
          <div className="rightTiles">
            <div className="foodType">
              <FoodTileContainer />
            </div>
            <div className="foodItems">
               <ItemTileContainer / >
            </div>
          </div>
         </div>
      </div>
      <div className="table">
          <Table />
      </div>
      
      
    </div>
  );
}

export default App;

