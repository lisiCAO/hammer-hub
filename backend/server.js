const express = require('express');
const Auction = require('./models/Auction');
const app = express();
app.use(express.json());

/*
GET /api/auctions
GET /api/auction/123 (if needed)
POST /api/auctions
PATCH /api/auctions/123
*/
app.post('/api/auctions', async (req, res) => {
    try{
        const newAuction = await Auction.create(req.body);
        res.status(201).json(newAuction);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/auctions', async (req, res) => {
    try{
        const auctions = await Auction.findAll();
        res.json(auctions);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/auctions/:id', async (req, res) => {
    try{
        const auction = await Auction.findByPk(req.params.id);
        res.json(auction);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.patch('/api/auctions/:id', async (req, res) => {
    try{
        const auction = await Auction.findByPk(req.params.id);
        auction.update(req.body);
        res.json(auction);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/auctions/:id', async (req, res) => {
    try{
        const auction = await Auction.findByPk(req.params.id);
        auction.update(req.body);
        res.json(auction);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/auctions/:id', async (req, res) => {
    try{
        const auction = await Auction.findByPk(req.params.id);
        auction.destroy();
        res.json(auction);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`) );