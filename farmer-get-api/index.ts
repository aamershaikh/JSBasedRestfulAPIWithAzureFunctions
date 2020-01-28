import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger for farmer GET Request');
    const farmerId = req.params.id;
    if (farmerId!== null) {
        context.res = {
            body: "Welcome " + (req.params.id)
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
