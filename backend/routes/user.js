const router = require('express').Router();
const userController = require('../controllers/userController')
const upload = require('../utils/multer')
const { verifyToken, verifyAndAuthorization, verifyVendor, verifySupplier, verifyAdmin } = require('../middleware/verifyToken')

router.get('/profile', verifyAndAuthorization, userController.getUser)
router.get("/list", verifyAndAuthorization, userController.getAllUsers)
router.delete('/', verifyAndAuthorization, userController.deleteUser)
router.put('/', verifyAndAuthorization, upload.single('profile'), userController.updateUser);
router.post('/address', verifyAndAuthorization, userController.addAddress);

module.exports = router;