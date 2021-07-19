# Income & Expense Tracker

## If you need only react side do this

## Client

    1. Download Client folder
    2. Run npm i
    3. Run npm start

## Else

    1. clone or Download this repo
    2. Run npm i
    3. npm run dev
    4. Client -> http://localhost:3000
    5. Server -> http://localhost:5000

### Here client and server running concurrenlty so you don't need to run separately but running on different port.

## Inside .env

    1. NODE_ENV = development
    2. MONGO_URI
<br> 

# For Production Build

### 1. Make build in client

    -> npm run build

### 2. Change NODE_ENV development to production

    -> NODE_ENV = production

### 3. In Server.js file

    if(process.env.NODE_ENV === "production")
    {
        app.use(express.static('client/build))

        app.gte('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
    }

### 4. Start Production build
    -> npm start

Now Server and client running on same port.