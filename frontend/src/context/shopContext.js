import React, { Component } from 'react';
import Client from 'shopify-buy';


const ShopContext = React.createContext();
/*Builds the client gets api credentials from .env file */
const client = Client.buildClient({
    storefrontAccessToken: '955c6f5a46ee1f803914123685d31acf',
  	domain: 'thrillfuldevelopment.myshopify.com'    
  });


class ShopProvider extends Component {

    /*propert initial state*/
    state = {
        product: {},
        products: [],
        checkout: {},
        collections: [],
        collection: [],
        collectionName:"",
        /*for cart slide out functionality*/
        isCartOpen: false,
         /*for menu slide out functionality*/
        isMenuOpen: false
    }

    
    /*if checkout_id is not in local storage create checkout and hold data in local storage so browser can refresh w/o losing checkout data*/
    componentDidMount() {
        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }
    }

    /*creates checkout*/
    createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout })
    }

    /*sets the state for checkout*/
    fetchCheckout = (checkoutId) => {
        client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
                this.setState({ checkout: checkout })
            })
    }

    /*Add an item to cart*/ //quantity selector ?? here??
    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            }
        ]
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })

        this.openCart()
    }

     /*Remove an item from cart*/ 
    removeLineItem = async (lineItemIdsToRemove) => {
        const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
        this.setState({ checkout: checkout })
    }


     /*Gets all products*/ 
    fetchAllProducts = async () => {

        const products = await client.product.fetchAll()
        //updates the state//
        this.setState({ products: products })
    }

    /*using handle to fetch a product by name so the product name is in the browser link not a number~bette for SEO and branding*/
    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        //updates the state//
        this.setState({ product: product })
    }

    /*Fetches all collections*/ 
    fetchAllCollections = async () => {
        const collections = await client.collection.fetchAll();
        this.setState({ collections: collections });
        //console.log("COLLECTIONS ALL", collections); //TEST TRASH
    };

    /*Displays all products in a collection*/
    fetchCollectionById = async (collectionId) => {
        const collection = await client.collection.fetchWithProducts(collectionId);
        const collectionName = collection.title;
        this.setState({collection: collection.products});
        this.setState({collectionName: collectionName});
    }

    closeCart = async () => { this.setState({ isCartOpen: false }) }

    openCart = async () => { this.setState({ isCartOpen: true }) }

    closeMenu = async () => { this.setState({ isMenuOpen: false }) }

    openMenu = async () => { this.setState({ isMenuOpen: true }) }

    render() {
        /*console.log(this.state.checkout)*/ //TEST TRASH SHOWS CHECKOUT PAYLOAD//
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithHandle: this.fetchProductWithHandle,
                addItemToCheckout: this.addItemToCheckout,
                removeLineItem: this.removeLineItem,
                fetchAllCollections: this.fetchAllCollections,
                fetchCollectionById: this.fetchCollectionById,
                closeCart: this.closeCart,
                openCart: this.openCart,
                closeMenu: this.closeMenu,
                openMenu: this.openMenu

            }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }
export default ShopProvider