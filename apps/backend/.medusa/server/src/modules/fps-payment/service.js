"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
class FpsPaymentProvider extends utils_1.AbstractPaymentProvider {
    // --- THIS IS THE MAGIC FIX ---
    constructor(container, options) {
        super(container, options);
    }
    // -----------------------------
    async initiatePayment(input) {
        // Return a dummy session ID for the manual transfer
        return { id: "fps_session", data: {} };
    }
    async authorizePayment(input) {
        // Automatically authorize the payment so the customer can check out
        return {
            status: utils_1.PaymentSessionStatus.AUTHORIZED,
            data: input.session_data || {}
        };
    }
    async capturePayment(input) {
        return input.session_data || {};
    }
    async cancelPayment(input) {
        return input.session_data || {};
    }
    async deletePayment(input) {
        return input.session_data || {};
    }
    async getPaymentStatus(input) {
        return utils_1.PaymentSessionStatus.AUTHORIZED;
    }
    async refundPayment(input) {
        return input.session_data || {};
    }
    async retrievePayment(input) {
        return input.session_data || {};
    }
    async updatePayment(input) {
        return input.session_data || {};
    }
    // Required by Medusa v2, even if we don't use webhooks for manual transfers
    async getWebhookActionAndData(payload) {
        return { action: "not_supported" };
    }
}
FpsPaymentProvider.identifier = "fps-manual";
exports.default = FpsPaymentProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Zwcy1wYXltZW50L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBMEY7QUFFMUYsTUFBTSxrQkFBbUIsU0FBUSwrQkFBNEI7SUFHM0QsZ0NBQWdDO0lBQ2hDLFlBQVksU0FBYyxFQUFFLE9BQVk7UUFDdEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsZ0NBQWdDO0lBRWhDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBVTtRQUM5QixvREFBb0Q7UUFDcEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBVTtRQUMvQixvRUFBb0U7UUFDcEUsT0FBTztZQUNMLE1BQU0sRUFBRSw0QkFBb0IsQ0FBQyxVQUFVO1lBQ3ZDLElBQUksRUFBRSxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQVU7UUFDN0IsT0FBTyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFVO1FBQzVCLE9BQU8sS0FBSyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBVTtRQUM1QixPQUFPLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBVTtRQUMvQixPQUFPLDRCQUFvQixDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFVO1FBQzVCLE9BQU8sS0FBSyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBVTtRQUM5QixPQUFPLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQVU7UUFDNUIsT0FBTyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxPQUFZO1FBQ3hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7QUFwRE0sNkJBQVUsR0FBRyxZQUFZLENBQUM7QUF1RG5DLGtCQUFlLGtCQUFrQixDQUFDIn0=