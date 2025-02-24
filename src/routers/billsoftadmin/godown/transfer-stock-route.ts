import { Router } from 'express';
import { getController} from '@controllers/billsoftadmin/godown/transfer-stock-controller';

const router = Router();

router.get('/godown/transferstock/get/:OwnShop', getController);

export default router;