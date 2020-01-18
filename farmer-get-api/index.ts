import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: any, req: any): Promise<void> {
    context.log('HTTP trigger for farmer GET Request');
    const farmerId: number = req.params.id;
    if (farmerId ! == 0) {
        context.res = {
            body: "Hello " + (farmerId)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass farmerId"
        };
    }
};

export default httpTrigger;
