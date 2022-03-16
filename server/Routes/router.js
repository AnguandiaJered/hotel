const router = require("express").Router();
const User = require("../Controller/UserController");
const Chambre = require("../Controller/ChambreController");
const Affectation = require("../Controller/AffectationController");
const Classeroom = require("../Controller/ClasschambreController");
const Client = require("../Controller/ClientController");
const Fonction = require("../Controller/FonctionController");
const Paieconsommation = require("../Controller/PaieconsommationController");
const Paiehotel = require("../Controller/PaiehotelController");
const Paiesalle = require("../Controller/PaiesalleController");
const Personnel = require("../Controller/PersonnelController");
const Reservationchambre = require("../Controller/ReservationchambreController");
const Reservationsalle = require("../Controller/Reservationsalle");
const Salle = require("../Controller/SalleController");
const Service = require("../Controller/ServiceController");



router.post("/user/create",User.createUser);
router.get("/user/edit/:id",User.showUser);
router.put("/user/update/:id",User.updateUser);
router.delete("/user/delete/:id",User.deleteUser);
router.get("/user/showalluser",User.showallUser);

router.post("/chambre/create",Chambre.createChambre);
router.get("/chambre/edit/:id",Chambre.showChambre);
router.get("/chambre/showallroom",Chambre.showAllChambre);
router.put("/chambre/update/:id",Chambre.updateChambre);
router.delete("/chambre/delete/:id",Chambre.deleteChambre);

router.post("/affectation/create",Affectation.createAffectation);
router.get("/affectation/edit/:id",Affectation.showAffectation);
router.get("/affectation/showallaffectation",Affectation.showAllAffectation);
router.put("/affectation/update/:id",Affectation.updateAffectation);
router.delete("/affectation/delete/:id",Affectation.deleteAffectation);

router.post("/classroom/create",Classeroom.createClassroom);
router.get("/classroom/edit/:id",Classeroom.showClassroom);
router.get("/classroom/showallclassroom",Classeroom.showAllClassroom);
router.put("/classroom/update/:id",Classeroom.updateClassroom);
router.delete("/classroom/delete/:id",Classeroom.deleteClassroom);

router.post("/client/create",Client.createClient);
router.get("/client/edit/:id",Client.showClient);
router.get("/client/showallclient",Client.showAllClient);
router.put("/client/update/:id",Client.updateClient);
router.delete("/client/delete/:id",Client.deleteClient);

router.post("/fonction/create",Fonction.createFonction);
router.get("/fonction/edit/:id",Fonction.showFonction);
router.get("/fonction/showallfonction",Fonction.showAllFonction);
router.put("/fonction/update/:id",Fonction.updateFonction);
router.delete("/fonction/delete/:id",Fonction.deleteFonction);

router.post("/consommation/create",Paieconsommation.createPaieconsommation);
router.get("/consommation/edit/:id",Paieconsommation.showPaieconsommation);
router.get("/consommation/showallconsommation",Paieconsommation.showAllPaieconsommation);
router.put("/consommation/update/:id",Paieconsommation.updatePaieconsommation);
router.delete("/consommation/delete/:id",Paieconsommation.deletePaieconsommation);

router.post("/paiehotel/create",Paiehotel.createPaiehotel);
router.get("/paiehotel/edit/:id",Paiehotel.showPaiehotel);
router.get("/paiehotel/showallhotel",Paiehotel.showAllPaiehotel);
router.put("/paiehotel/update/:id",Paiehotel.updatePaiehotel);
router.delete("/paiehotel/delete/:id",Paiehotel.deletePaiehotel);

router.post("/paiesalle/create",Paiesalle.createPaiesalle);
router.get("/paiesalle/edit/:id",Paiesalle.showPaiesalle);
router.get("/paiesalle/showallsalle",Paiesalle.showAllPaiesalle);
router.put("/paiesalle/update/:id",Paiesalle.updatePaiesalle);
router.delete("/paiesalle/delete/:id",Paiesalle.deletePaiesalle);

router.post("/personnel/create",Personnel.createPersonnel);
router.get("/personnel/edit/:id",Personnel.showPersonnel);
router.get("/personnel/showallagent",Personnel.showAllPersonnel);
router.put("/personnel/update/:id",Personnel.updatePersonnel);
router.delete("/personnel/delete/:id",Personnel.deletePersonnel);

router.post("/reserveroom/create",Reservationchambre.createReservationchambre);
router.get("/reserveroom/edit/:id",Reservationchambre.showReservationchambre);
router.get("/reserveroom/showallreserve",Reservationchambre.showAllReservationchambre);
router.put("/reserveroom/update/:id",Reservationchambre.updateReservationchambre);
router.delete("/reserveroom/delete/:id",Reservationchambre.deleteReservationchambre);

router.post("/reservesalle/create",Reservationsalle.createReservationsalle);
router.get("/reservesalle/edit/:id",Reservationsalle.showReservationsalle);
router.get("/reservesalle/showallreserve",Reservationsalle.showAllReservationsalle);
router.put("/reservesalle/update/:id",Reservationsalle.updateReservationsalle);
router.delete("/reservesalle/delete/:id",Reservationsalle.deleteReservationsalle);

router.post("/salle/create",Salle.createSalle);
router.get("/salle/edit/:id",Salle.showSalle);
router.get("/salle/showallresalle",Salle.showAllSalle);
router.put("/salle/update/:id",Salle.updateSalle);
router.delete("/salle/delete/:id",Salle.deleteSalle);

router.post("/service/create",Service.createService);
router.get("/service/edit/:id",Service.showService);
router.get("/service/showallservice",Service.showAllService);
router.put("/service/update/:id",Service.updateService);
router.delete("/service/delete/:id",Service.deleteService);



module.exports = router;