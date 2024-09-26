import MidtransClient from "midtrans-client";
import {NextRequest, NextResponse} from "next/server";

let coreApi = new MidtransClient.CoreApi({
    isProduction: process.env.NEXT_MIDTRANS_IS_PRODUCTION === "true",
    serverKey: process.env.NEXT_MIDTRANS_SERVER_KEY,
    clientKey: process.env.NEXT_MIDTRANS_CLIENT_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const requestBody =
            await request.json() as PaymentData;

        const transaction = await coreApi.charge(requestBody);

        return NextResponse.json(transaction, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {error: "Payment Generate Failed"},
            {status: 500}
        );
    }
}
