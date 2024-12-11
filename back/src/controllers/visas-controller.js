import { Router } from 'express';
import VisasService from '../services/visas-service.js';
const router = Router();
const svc = new VisasService();


router.get('', async(req, res) => {
    const params = req.query;
    const resArray = await svc.searchAsync(params);
    res.status(resArray[1]).send(resArray[0]);
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const resArray = await svc.getByIdAsync(id);
    res.status(resArray[1]).send(resArray[0]);
    
});


router.post('', async(req, res) => {
    const body = req.body;
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; 
    const resArray = await svc.createAsync(body,token);
    res.status(resArray[1]).send(resArray[0]);
});


export default router;