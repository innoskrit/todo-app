import PaymentProcessor from "./PaymentProcessor";

class PaytmPaymentProcessor implements PaymentProcessor {
    public processPayment(amount: number) {
        console.log(`Processing payment of ${amount} through PayTM Payment Systems.`);
    }

    public getPaytmPublicId() {
        return "PAYTM1022";
    }
}

export default PaytmPaymentProcessor;