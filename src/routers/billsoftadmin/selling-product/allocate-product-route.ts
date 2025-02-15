import { Router } from 'express';
import { getController} from '@controllers/billsoftadmin/selling-product/allocate-product-controller';

const router = Router();

router.get('/selling-product/allocate-product/get/:CreatedBy', getController);



export default router;