import {NextRequest, NextResponse} from "next/server";
import axios from 'axios';
import {base64encode} from "nodejs-base64/src";

export async function GET(request: NextRequest, {params}: { params: { order_id: string } }) {
    try {
        const url = process.env.NEXT_MIDTRANS_API_URL;

        const options = {
            method: 'GET',
            url: `${url}/v2/${params.order_id}/status`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: `Basic ${base64encode(process.env.NEXT_MIDTRANS_SERVER_KEY ?? '')}`
            }
        };

        const response = await axios.request(options);

        return NextResponse.json(response.data, {status: 200});
    } catch (error) {
        console.error("Error creating transaction token:", error);
        return NextResponse.json(
            {error: "Failed Get SNAP Token"},
            {status: 500}
        );
    }
}
