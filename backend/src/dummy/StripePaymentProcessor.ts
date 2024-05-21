import PaymentProcessor from "./PaymentProcessor";

class StripePaymentProcessor implements PaymentProcessor {
    public processPayment(amount: number) {
        console.log(`Processing payment of ${amount} through Stripe Payment Systems.`);
    }
}

export default StripePaymentProcessor;