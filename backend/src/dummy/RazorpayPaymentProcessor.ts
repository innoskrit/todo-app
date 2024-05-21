import PaymentProcessor from "./PaymentProcessor";

class RazorpayPaymentProcessor implements PaymentProcessor {
    public processPayment(amount: number) {
        console.log(`Processing payment of ${amount} through Razorpay Payment Systems.`);
    }
}

export default RazorpayPaymentProcessor;