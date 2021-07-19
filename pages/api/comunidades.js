import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response){

    if(request.method == 'POST'){
        const TOKEN = '17243a2b93807506554ec1031799f8';
        const client = new SiteClient(TOKEN);
        
        //seria ideal validar os dados aqui
        const registroCriado = await client.items.create({
            itemType: "971000",
            ...request.body,
        })
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não há nada no GET, mas sim no POST!'
    })
}