import PaymentProcessor from "./PaymentProcessor";

class PaymentService {
    private paymentProcessor: PaymentProcessor

    constructor(paymentProcessor: PaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    public makePayment(amount: number): void {
        this.paymentProcessor.processPayment(amount);
    }
}

export default PaymentService;