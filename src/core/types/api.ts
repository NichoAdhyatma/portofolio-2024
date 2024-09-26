type PaymentData = {
    payment_type?: string | null;
    transaction_details?: {
        order_id?: string | null;
        gross_amount?: number | null;
    } | null;
    credit_card?: {
        token_id?: string | null;
        authentication?: boolean | null;
    } | null;
    item_details?: {
        id?: string | null;
        price?: number | null;
        quantity?: number | null;
        name?: string | null;
    }[] | null;
    bank_transfer?: {
        bank?: string | null;
    } | null;
    qris?: {
        acquirer?: string | null;
    } | null;
    customer_details?: {
        first_name?: string | null;
        last_name?: string | null;
        email?: string | null;
        phone?: string | null;
        billing_address?: {
            first_name?: string | null;
            last_name?: string | null;
            email?: string | null;
            phone?: string | null;
            address?: string | null;
            city?: string | null;
            postal_code?: string | null;
            country_code?: string | null;
        } | null;
        shipping_address?: {
            first_name?: string | null;
            last_name?: string | null;
            email?: string | null;
            phone?: string | null;
            address?: string | null;
            city?: string | null;
            postal_code?: string | null;
            country_code?: string | null;
        } | null;
    } | null;
};
