import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function for POST request');
    let json : any;
    let err : any;
    if (req.body !== undefined) {
        json = JSON.stringify(req.body);
    }
    else {
        err = {
            status: 400,
            body: "Please pass farmer data in body"
        };
    }
    context.done(err,json);
};

export default httpTrigger;
