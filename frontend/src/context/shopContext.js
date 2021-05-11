  
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
        // productVariants: [],
        checkout: {},
        collections: [],
        collection: [],
        collectionName:"",
        lineItems: [],
        lineItemToUpdate: [{id: "", qty: 0}],
        quantity: 0,
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

        /* Update Line Item Quantity
        (checkoutId, Line item to update) */
        updateLineItem = async (checkoutId, lineItemToUpdate) => {
            // Update the line item on the checkout (change the quantity or variant)
            client.checkout.updateLineItems(checkoutId, lineItemToUpdate).then((checkout) =>{
                const lineItems = checkout.lineItems;
                this.setState ({ checkout: checkout })
                // array of items in cart
                this.setState ({ lineItems: lineItems})
                this.setState ({ lineItemToUpdate: [{id: lineItems.id, qty: lineItems.quantity}]})
                // this.setState ({ lineItemId: lineItemToUpdate.id})
                // this.setState ({ lineItemQty: lineItemToUpdate.quantity})
    
                console.log("line item to update in context method: ", lineItemToUpdate)
                console.log("line item to update in context method: ", lineItems)
            })
        }
    
        // updateLineItem = async (checkoutId, lineItemToUpdate) => {
        //     // Update the line item on the checkout (change the quantity or variant)
        //     const checkout = await client.checkout.updateLineItems(this.state.checkout.id, lineItemToUpdate)
        //     const lineItems = checkout.lineItems;
        //     this.setState = ({ checkout: checkout })
        //     this.setState = ({ lineItems : lineItems})        
        // }


     /*Gets all products*/ 
    fetchAllProducts = async () => {

        const products = await client.product.fetchAll()
        //updates the state//
        this.setState({ products: products })
    }

    /*using handle to fetch a product by name so the product name is in the browser link not a number~bette for SEO and branding*/
    // add product.variants in order to get sizes
    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        // const prodVariants = product.variants
        //updates the state//
        this.setState({ product: product })
        // this.setState({ productVariants: prodVariants})
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

            // TEST update line item
        // const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZT9rZXk9YTdhODM0YWQyYmM5NzJiNmZiNGI4ZTEwZGI1NmY2ZWE=';
        // const lineItemToUpdate = [
        //     { id: 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzM5NzAwMTQyNDU3MDAwMD9jaGVja291dD00YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZQ==', quantity:5 }
        // ];
        // const updated = this.updateLineItems(checkoutId, lineItemToUpdate);
        // console.log("updated: ", updated);
        // this.updateLineItem(checkoutId, lineItemToUpdate)
        
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