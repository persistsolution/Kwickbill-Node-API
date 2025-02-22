import { Router } from 'express';
import { getController,getStockProdController,getStockProdDetailsController} from '@controllers/billsoftadmin/godown/godown-stock-controller';

const router = Router();

router.get('/godown/stock/get', getController);
router.get('/godown/stock/getstockprod', getStockProdController);
router.get('/godown/stock/getstockproddetails/:pid/:godownid', getStockProdDetailsController);

export default router;