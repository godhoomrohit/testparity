Ethlife steps:

1. Install

    ./init.sh

    npm install -g webpack


2. Build and watch

    npm run build    

    ...Files will be built into `dist/`. Just symlink that dir into your dapps path.


3. Getting it visible in Parity

    For Mac systems

    ln -s $PWD/dist $HOME/Library/Application\ Support/io.parity.ethereum/dapps/ethlife

    For Linux systems

    ln -s $PWD/dist $HOME/.local/share/io.parity.ethereum/dapps/ethlife


4. If using local chain, Start local parity and attach console

    geth --datadir <PATH>/nodes/01 --identity node_1 --networkid 1234 --port 8201  --unlock <ADDRESS>  --password <(echo -n 01)  --nodiscover --rpc --rpcport 31101 --rpccorsdomain '*'

    geth attach <PATH>/nodes/01/geth.ipc
    

5. start parity


6. In application, click refresh, app will be visible


7. Make changes to src/client/app.jsx and refresh page, new content will be visible