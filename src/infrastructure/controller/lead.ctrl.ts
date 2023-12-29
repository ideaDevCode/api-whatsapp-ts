import path from "path"
import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };

  /**
   * Show img QR Login
   *
   * @param {Request} { body }
   * @param {Response} res
   * @memberof LeadCtrl
   */
  public sendQR = ({ body }: Request, res: Response) => {
    const urlQR = path.join(__dirname, "../../../tmp/qr.svg")
    res.sendFile(urlQR);
  };
}

export default LeadCtrl;
