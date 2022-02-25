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
router.get("/user/showuser",User.showUser);
router.put("/user/update",User.updateUser);
router.delete("/user/delete",User.deleteUser);

router.post("/chambre/create",Chambre.createChambre);
router.get("/chambre/showroom",Chambre.showChambre);
router.put("/chambre/update",Chambre.updateChambre);
router.delete("/chambre/delete",Chambre.deleteChambre);

router.post("/affectation/create",Affectation.createAffectation);
router.get("/affectation/showaffectation",Affectation.showAffectation);
router.put("/affectation/update",Affectation.updateAffectation);
router.delete("/affectation/delete",Affectation.deleteAffectation);

router.post("/classroom/create",Classeroom.createClassroom);
router.get("/classroom/showclassroom",Classeroom.showClassroom);
router.put("/classroom/update",Classeroom.updateClassroom);
router.delete("/classroom/delete",Classeroom.deleteClassroom);

router.post("/client/create",Client.createClient);
router.get("/client/showclient",Client.showClient);
router.put("/client/update",Client.updateClient);
router.delete("/client/delete",Client.deleteClient);

router.post("/fonction/create",Fonction.createFonction);
router.get("/fonction/showfonction",Fonction.showFonction);
router.put("/fonction/update",Fonction.updateFonction);
router.delete("/fonction/delete",Fonction.deleteFonction);

router.post("/paieconsommation/create",Paieconsommation.createPaieconsommation);
router.get("/paieconsommation/showconsommation",Paieconsommation.showPaieconsommation);
router.put("/paieconsommation/update",Paieconsommation.updatePaieconsommation);
router.delete("/paieconsommation/delete",Paieconsommation.deletePaieconsommation);

router.post("/paiehotel/create",Paiehotel.createPaiehotel);
router.get("/paiehotel/showhotel",Paiehotel.showPaiehotel);
router.put("/paiehotel/update",Paiehotel.updatePaiehotel);
router.delete("/paiehotel/delete",Paiehotel.deletePaiehotel);

router.post("/paiesalle/create",Paiesalle.createPaiesalle);
router.get("/paiesalle/showsalle",Paiesalle.showPaiesalle);
router.put("/paiesalle/update",Paiesalle.updatePaiesalle);
router.delete("/paiesalle/delete",Paiesalle.deletePaiesalle);

router.post("/personnel/create",Personnel.createPersonnel);
router.get("/personnel/showagent",Personnel.showPersonnel);
router.put("/personnel/update",Personnel.updatePersonnel);
router.delete("/personnel/delete",Personnel.deletePersonnel);

router.post("/reserveroom/create",Reservationchambre.createReservationchambre);
router.get("/reserveroom/showreserve",Reservationchambre.showReservationchambre);
router.put("/reserveroom/update",Reservationchambre.updateReservationchambre);
router.delete("/reserveroom/delete",Reservationchambre.deleteReservationchambre);

router.post("/reservesalle/create",Reservationsalle.createReservationsalle);
router.get("/reservesalle/showreserve",Reservationsalle.showReservationsalle);
router.put("/reservesalle/update",Reservationsalle.updateReservationsalle);
router.delete("/reservesalle/delete",Reservationsalle.deleteReservationsalle);

router.post("/salle/create",Salle.createSalle);
router.get("/salle/showresalle",Salle.showSalle);
router.put("/salle/update",Salle.updateSalle);
router.delete("/salle/delete",Salle.deleteSalle);

router.post("/service/create",Service.createService);
router.get("/service/showreservice",Service.showService);
router.put("/service/update",Service.updateService);
router.delete("/service/delete",Service.deleteService);



module.exports = router;