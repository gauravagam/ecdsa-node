## ECDSA Node
You can test the functionality with following private and public key pairs :-
<p>
 <b>private key</b> :- 0f34c9118e3afa83a0ca947e29af8696a0d9c70de5c99a32a383e1f73301d4ea<br>
 <b>public key</b> :- 0476e3efabc8962023098d96490e6087d59476d07e8cf9a615f25e00de87a0965a5998749abce733a1319e3ef93254debc0391ea8664c2eb3f8c651476f64f3dc2</p>

<p>
 <b>private key</b>  98968b7ae519c62b0382d6062cfcfd166f1fe6c539d5c363a9f0bed8b3943ccd<br>
 <b>public key</b>  049d04ef1b733a352f2328cc2e3374206fe7a7decdc898eb7fd1a6d122edddc908ff5c27c5263d2602f0559f74ef47821a41c856338919da5ff9177741c42d58e3</p>

<p>
 <b>private key</b>  9340d5bb1d6859da3be969550149938eab6abf70eaaac00c3ff117ff6d69a1c6<br>
 <b>public key</b>  04b0d792b04c5f55f93043c0f9dc74905867abf7f61a6e2e1195e855d71cecd5a84a33ea0e11b4323c1884fa8cb0f772772dca52fdf1f53e838557a3b8b83402c3</p>


This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
