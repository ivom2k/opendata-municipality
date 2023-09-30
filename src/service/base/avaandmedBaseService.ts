import { avaandmedClient } from "@/axios/avaandmed";
import { parse } from 'csv-parse/sync';

export default class AvaandmedBaseService
{
    async getDatasetFileContentAsync(dataset: string, fileId: string)
    {
        const httpClient = avaandmedClient();
        const response = (await httpClient.post(`datasets/${dataset}/files/${fileId}/download`));

        const data = await parse(response.data);

        console.log(data);
    }
}