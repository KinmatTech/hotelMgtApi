import express from "express";
import { 
    getRooms, 
    getRoomsById,
    saveRooms,
    updateRooms,
    deleteRooms,
    fetchRooms
} from "../controllers/RoomController.js";
 
const router = express.Router();
 
router.get('/rooms', getRooms);
router.get('/rooms/:id', getRoomsById);
router.post('/rooms', saveRooms);
router.post('/rooms', fetchRooms);
router.patch('/rooms/:id', updateRooms);
router.delete('/rooms/:id', deleteRooms);
 
export default router;