import {NextRequest, NextResponse} from "next/server";
import MidtransClient from "midtrans-client";

let coreApi = new MidtransClient.CoreApi({
    isProduction: process.env.NEXT_MIDTRANS_IS_PRODUCTION === "true",
    serverKey: process.env.NEXT_MIDTRANS_SERVER_KEY,
    clientKey: process.env.NEXT_MIDTRANS_CLIENT_KEY,
});

export async function GET(request: NextRequest, {params}: { params: { order_id: string } }) {
    try {
        const result = await coreApi.transaction.status(params.order_id);

        return NextResponse.json(result, {status: 200});
    } catch (error) {
        console.error("Error creating transaction token:", error);
        return NextResponse.json(
            {error: "Failed Get SNAP Token"},
            {status: 500}
        );
    }
}
