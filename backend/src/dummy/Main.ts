import PaymentService from "./PaymentService";
import PaytmPaymentProcessor from "./PaytmPaymentProcessor";
import RazorpayPaymentProcessor from "./RazorpayPaymentProcessor";
import StripePaymentProcessor from "./StripePaymentProcessor";

const paymentService = new PaymentService(new StripePaymentProcessor());
paymentService.makePayment(200);