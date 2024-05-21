interface PaymentProcessor {
    processPayment(amount: number): void;
}

export default PaymentProcessor;