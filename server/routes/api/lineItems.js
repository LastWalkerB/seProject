const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const pool = require("../../db");

//middlewared
app.use(cors());
app.use(express.json()); //gives access to req.body to get json data
router.use(express.json());
router.use(cors());


//get all
router.get('/', async (req, res) => {
    try {
        const allLinesItems = await pool.query("SELECT * FROM lineItems");
        res.json(allLinesItems.rows);
    } catch (error) {
        console.log('what scene?');
        console.error(error.message);
    }
});

//create
router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        const {
            cart_id
        } = req.body;
        const {
            product_id
        } = req.body;
        const {
            quantity
        } = req.body;

        const newLineItem = await pool.query("INSERT INTO lineItems (cart_id, product_id, quantity) VALUES($1, $2, $3)",
            [cart_id, product_id, quantity]);

        res.json(newLineItem.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//increments the value of a lineitem in cart
router.put('/', async (req, res) => {
    try {
        console.log(req.body);

        const {
            cart_id
        } = req.body;
        const {
            product_id
        } = req.body;

        const lineItem = await pool.query("UPDATE lineItems SET quantity = quantity+1 WHERE cart_id = $2 WHERE product_id = $3",

            [quantity,  product_id, cart_id]);

        res.json("lineItem was updated.");
    } catch (error) {
        console.error(error.message);
    }
});

//find by id

router.get("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const lineItem = await pool.query("SELECT * FROM lineItems where cart_id = $1", [id]);

        res.json(lineItem.rows);
    } catch (error) {
        console.error(error.message);
    }
});


//delete
router.delete("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const deleteLineItem = await pool.query('DELETE FROM lineItems WHERE lineitem_id = $1', [id]);

        res.json("record deleted");
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;
