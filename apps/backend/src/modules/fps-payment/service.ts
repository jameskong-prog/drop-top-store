import { AbstractPaymentProvider, PaymentSessionStatus } from "@medusajs/framework/utils";

class FpsPaymentProvider extends AbstractPaymentProvider<any> {
  static identifier = "fps-manual";
  
  // --- THIS IS THE MAGIC FIX ---
  constructor(container: any, options: any) {
    super(container, options);
  }
  // -----------------------------

  async initiatePayment(input: any): Promise<any> {
    // Return a dummy session ID for the manual transfer
    return { id: "fps_session", data: {} };
  }

  async authorizePayment(input: any): Promise<any> {
    // Automatically authorize the payment so the customer can check out
    return { 
      status: PaymentSessionStatus.AUTHORIZED, 
      data: input.session_data || {}
    };
  }

  async capturePayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  async cancelPayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  async deletePayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  async getPaymentStatus(input: any): Promise<any> {
    return PaymentSessionStatus.AUTHORIZED;
  }

  async refundPayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  async retrievePayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  async updatePayment(input: any): Promise<any> {
    return input.session_data || {};
  }

  // Required by Medusa v2, even if we don't use webhooks for manual transfers
  async getWebhookActionAndData(payload: any): Promise<any> {
    return { action: "not_supported" };
  }
}

export default FpsPaymentProvider;