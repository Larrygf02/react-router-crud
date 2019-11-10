import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import AgregarProducto from './components/AgregarProducto'
import Producto from './components/Producto'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto}></Route>
          <Route exact path="/productos" component={Productos}></Route>
          <Route exact path="/productos/:id" component={Producto}></Route>
          <Route exact path="/producto/editar/:id" component={EditarProducto}></Route>
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
