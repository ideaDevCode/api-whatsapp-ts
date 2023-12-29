import express, { Router } from "express";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
const router: Router = Router();


/**
 * http://localhost/qrimg GET
 */
const leadCtrl: LeadCtrl = container.get("lead.ctrl");
router.get("/", leadCtrl.sendQR);

export { router };
