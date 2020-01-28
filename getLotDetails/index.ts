import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, lotDetails: any): Promise<void> {
    context.log('HTTP trigger function processed a getLotDetails request.');
    
    let json;
    let err;

    if(!lotDetails) {
        context.log("No Lot details found");
    } else {
        json = JSON.stringify(lotDetails);
        context.res = {
            body: json
        };
        context.log("Lot Details : " + json)
    }
    context.done(err,json);
};


