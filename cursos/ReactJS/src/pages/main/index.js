// Como estamos declarando um classe Main e extendo o Componente, precisamos importar o componente também
import React, { Component } from 'react';
import api from '../../services/api';
// Serve para redirecionamento
import { Link } from 'react-router-dom';

import "./styles.css";

// Estamos exportando como um classe devido ao fato de que queremos exportar apenas o conteúdo visual6
export default class Main extends Component {
    // Criando "variável"/estado para receber os dados da API
    state = {
        products: [],
        productInfo: {},
        // Página inicial
        page: 1,
    };

    // Método executado assim que o componente for mostrado na tela 
    componentDidMount() {
        this.loadProducts();
    }

    // Quando utilizamos uma função nossa (criada pela gente), precisamos usar arrow function
    // Por isso no método acima não estamos usando arrow
    // Além disso, o arrow não sobrescreve o valor do this, continua mantendo o valor do escopo fora da função
    // Definindo valor padrão
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        // Mesma lógica da nextPage, só que diminuindo o contador e verificando se ele já está na primeira página
        const { page } = this.state

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        // Buscando página atual e o ProductInfo do estado
        const { page, productInfo } = this.state

        // Verificando se já está na ultima página, caso sim, ele dá apenas um return (para fazer nada)
        if (page === productInfo.pages) return;

        // Adicionando +1 valor à variável de página
        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    }

    // render() {
    //     return <h1>Contagem de produtos: {this.state.products.length}</h1>;
    // }

    render() {
        // Desestruturando o State de Products
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {
                    // Sem a desestruturação                
                    /* this.state.products.map(product => ( */
                    
                    // Com a desestruturação
                    products.map(product => (
                        // Para evitar possíveis conflitos, o React pede para que cada produto do array tenha um key único
                        <article key={ product._id }>
                            <strong>{ product.title }</strong>
                            <p> {product.description} </p>

                            {/* <a href="">Acessar</a> */}
                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                                                
                        /* <h2 key={product._id}>{product.title}</h2> */
                    ))
                }
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>            
        );
    }
}