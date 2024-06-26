/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class ListaPedido extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }        
    
    render() {
        
        let estilo = `collection-item active purple accent-2${this.props.tema}`
        return (
            <div className="containerPed">

            <h2>Listagem Geral dos Pedidos</h2>

            <div className="collection home">
                <Link to ={'/pedido'} className="collection-item pointer">Pedido1</Link>
                <Link to ={'/pedido'} className="collection-item pointer">Pedido2</Link>
                <Link to ={'/pedido'} className="collection-item pointer">Pedido3</Link>
                <Link to ={'/pedido'} className="collection-item pointer">Pedido4</Link>
            </div>

        </div>
    )}}