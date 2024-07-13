import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    // const { id, productName, price, quantity, customer_details } =
    //     await request.json();
    //
    // let parameter = {
    //     item_details: {
    //         name: productName,
    //         price: price,
    //         quantity: quantity,
    //     },
    //     transaction_details: {
    //         order_id: id,
    //         gross_amount: price * quantity,
    //     },
    //     customer_details: {
    //         first_name: customer_details.first_name,
    //         email: customer_details.email,
    //     },
    // };

    try {

        return NextResponse.json({message: "Success sent message"}, { status: 200 });
    } catch (error) {
        console.error("Error creating transaction token:", error);
        return NextResponse.json(
            { error: "Failed Get SNAP Token" },
            { status: 500 }
        );
    }
}