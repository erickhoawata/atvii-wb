/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { Link } from "react-router-dom";
import "../listagens/listagens.css"


type props = {
    tema: string
}

export default class Listagens extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }  

    render() {
        let estilo = `collection-item active pink lighten-1 ${this.props.tema}`
        return (
            <div className='container center'>
            <h2 className='title'> Listagens de Consumo </h2>
                <div className="row">
                <div className="col s12 ">
                    <ul className="tabs-swipe-demo tabs tabsConsumo ">
                        <li className="tab col s2"><a href="#test-swipe-1">Cli.Consumo Valor</a></li>
                        <li className="tab col s2"><a href="#test-swipe-2">Cli.Maior Qtd</a></li>
                        <li className="tab col s2"><a href="#test-swipe-3">Cli.Menor Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-4">Prod/Serv Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-5">Consumo Genero</a></li>
                    </ul>
                </div>
                    <div id="test-swipe-1" className="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Érick</td>
                                        <td>524.696.158-31</td>
                                        <td>(12) 3206-2101</td>
                                    </tr>     
                                    <tr>
                                        <td>2</td>
                                        <td>Cauã</td>
                                        <td>524.696.158-32</td>
                                        <td>(12) 3206-2102</td>
                                    </tr>  
                                    <tr>
                                        <td>3</td>
                                        <td>Luiz</td>
                                        <td>524.696.158-33</td>
                                        <td>(12) 3206-2103</td>
                                    </tr>  
                                    <tr>
                                        <td>4</td>
                                        <td>Mateus</td>
                                        <td>524.696.158-34</td>
                                        <td>(12) 3206-2104</td>
                                    </tr>   
                                    <tr>
                                        <td>5</td>
                                        <td>Ryan</td>
                                        <td>524.696.158-35</td>
                                        <td>(12) 3206-2105</td>
                                    </tr>  
                                    <tr>
                                        <td>6</td>
                                        <td>Pedro</td>
                                        <td>524.696.158-36</td>
                                        <td>(12) 3206-2106</td>
                                    </tr>   
                                    <tr>
                                        <td>7</td>
                                        <td>Enzo</td>
                                        <td>524.696.158-37</td>
                                        <td>(12) 3206-2107</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Julia</td>
                                        <td>524.696.158-38</td>
                                        <td>(12) 3206-2108</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Maria Eduarda</td>
                                        <td>524.696.158-39</td>
                                        <td>(12) 3206-2109</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Bruno</td>
                                        <td>524.696.158-30</td>
                                        <td>(12) 3206-2100</td>
                                    </tr>                     
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="test-swipe-2" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Érick</td>
                                        <td>524.696.158-31</td>
                                        <td>(12) 3206-2101</td>
                                    </tr>     
                                    <tr>
                                        <td>2</td>
                                        <td>Cauã</td>
                                        <td>524.696.158-32</td>
                                        <td>(12) 3206-2102</td>
                                    </tr>  
                                    <tr>
                                        <td>3</td>
                                        <td>Luiz</td>
                                        <td>524.696.158-33</td>
                                        <td>(12) 3206-2103</td>
                                    </tr>  
                                    <tr>
                                        <td>4</td>
                                        <td>Mateus</td>
                                        <td>524.696.158-34</td>
                                        <td>(12) 3206-2104</td>
                                    </tr>   
                                    <tr>
                                        <td>5</td>
                                        <td>Ryan</td>
                                        <td>524.696.158-35</td>
                                        <td>(12) 3206-2105</td>
                                    </tr>  
                                    <tr>
                                        <td>6</td>
                                        <td>Pedro</td>
                                        <td>524.696.158-36</td>
                                        <td>(12) 3206-2106</td>
                                    </tr>   
                                    <tr>
                                        <td>7</td>
                                        <td>Enzo</td>
                                        <td>524.696.158-37</td>
                                        <td>(12) 3206-2107</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Julia</td>
                                        <td>524.696.158-38</td>
                                        <td>(12) 3206-2108</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Maria Eduarda</td>
                                        <td>524.696.158-39</td>
                                        <td>(12) 3206-2109</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Bruno</td>
                                        <td>524.696.158-30</td>
                                        <td>(12) 3206-2100</td>
                                    </tr>                        
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-3" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Érick</td>
                                        <td>524.696.158-31</td>
                                        <td>(12) 3206-2101</td>
                                    </tr>     
                                    <tr>
                                        <td>2</td>
                                        <td>Cauã</td>
                                        <td>524.696.158-32</td>
                                        <td>(12) 3206-2102</td>
                                    </tr>  
                                    <tr>
                                        <td>3</td>
                                        <td>Luiz</td>
                                        <td>524.696.158-33</td>
                                        <td>(12) 3206-2103</td>
                                    </tr>  
                                    <tr>
                                        <td>4</td>
                                        <td>Mateus</td>
                                        <td>524.696.158-34</td>
                                        <td>(12) 3206-2104</td>
                                    </tr>   
                                    <tr>
                                        <td>5</td>
                                        <td>Ryan</td>
                                        <td>524.696.158-35</td>
                                        <td>(12) 3206-2105</td>
                                    </tr>  
                                    <tr>
                                        <td>6</td>
                                        <td>Pedro</td>
                                        <td>524.696.158-36</td>
                                        <td>(12) 3206-2106</td>
                                    </tr>   
                                    <tr>
                                        <td>7</td>
                                        <td>Enzo</td>
                                        <td>524.696.158-37</td>
                                        <td>(12) 3206-2107</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Julia</td>
                                        <td>524.696.158-38</td>
                                        <td>(12) 3206-2108</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Maria Eduarda</td>
                                        <td>524.696.158-39</td>
                                        <td>(12) 3206-2109</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Bruno</td>
                                        <td>524.696.158-30</td>
                                        <td>(12) 3206-2100</td>
                                    </tr>                        
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-4" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Limpeza de Pele</td>
                                        <td>R$99,99</td>
                                    </tr>  
                                    <tr>
                                        <td>2</td>
                                        <td>Corte de Cabelo Masculino</td>
                                        <td>R$30,00</td>
                                    </tr>                        
                                    <tr>
                                        <td>3</td>
                                        <td>Corte de Cabelo Feminino</td>
                                        <td>R$90,00</td>
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Escova</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Manicure</td>
                                        <td>R$70,00</td>
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Pedicure</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Progressiva</td>
                                        <td>R$120,00</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Restauração de Pontas</td>
                                        <td>R$139,00</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Sombrancelha</td>
                                        <td>R$15,00</td>
                                    </tr> 
                                    <tr>
                                        <td>10</td>
                                        <td>Luzes</td>
                                        <td>R$169,99</td>
                                    </tr> 
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-5" className="col s12"> 
                    <form>
                            <h2 className='generoConsumoFont'><strong>Masculino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Limpeza de Pele</td>
                                        <td>R$99,99</td>
                                    </tr>  
                                    <tr>
                                        <td>2</td>
                                        <td>Corte de Cabelo Masculino</td>
                                        <td>R$30,00</td>
                                    </tr>                        
                                    <tr>
                                        <td>3</td>
                                        <td>Corte de Cabelo Feminino</td>
                                        <td>R$90,00</td>
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Escova</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Manicure</td>
                                        <td>R$70,00</td>
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Pedicure</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Progressiva</td>
                                        <td>R$120,00</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Restauração de Pontas</td>
                                        <td>R$139,00</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Sombrancelha</td>
                                        <td>R$15,00</td>
                                    </tr> 
                                    <tr>
                                        <td>10</td>
                                        <td>Luzes</td>
                                        <td>R$169,99</td>
                                    </tr>                            
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Feminino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Limpeza de Pele</td>
                                        <td>R$99,99</td>
                                    </tr>  
                                    <tr>
                                        <td>2</td>
                                        <td>Corte de Cabelo Masculino</td>
                                        <td>R$30,00</td>
                                    </tr>                        
                                    <tr>
                                        <td>3</td>
                                        <td>Corte de Cabelo Feminino</td>
                                        <td>R$90,00</td>
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Escova</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Manicure</td>
                                        <td>R$70,00</td>
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Pedicure</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Progressiva</td>
                                        <td>R$120,00</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Restauração de Pontas</td>
                                        <td>R$139,00</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Sombrancelha</td>
                                        <td>R$15,00</td>
                                    </tr> 
                                    <tr>
                                        <td>10</td>
                                        <td>Luzes</td>
                                        <td>R$169,99</td>
                                    </tr>                       
                                    </tbody>
                                </table>
                            </div>

                            <h3 className='generoConsumoFont'><strong>Não Informado</strong></h3>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Limpeza de Pele</td>
                                        <td>R$99,99</td>
                                    </tr>  
                                    <tr>
                                        <td>2</td>
                                        <td>Corte de Cabelo Masculino</td>
                                        <td>R$30,00</td>
                                    </tr>                        
                                    <tr>
                                        <td>3</td>
                                        <td>Corte de Cabelo Feminino</td>
                                        <td>R$90,00</td>
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Escova</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Manicure</td>
                                        <td>R$70,00</td>
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Pedicure</td>
                                        <td>R$80,00</td>
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Progressiva</td>
                                        <td>R$120,00</td>
                                    </tr> 
                                    <tr>
                                        <td>8</td>
                                        <td>Restauração de Pontas</td>
                                        <td>R$139,00</td>
                                    </tr> 
                                    <tr>
                                        <td>9</td>
                                        <td>Sombrancelha</td>
                                        <td>R$15,00</td>
                                    </tr> 
                                    <tr>
                                        <td>10</td>
                                        <td>Luzes</td>
                                        <td>R$169,99</td>
                                    </tr>                      
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>
                </div>
        </div>
    )
}
}