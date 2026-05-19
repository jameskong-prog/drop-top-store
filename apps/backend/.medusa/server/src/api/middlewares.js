"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/admin/uploads",
            method: ["POST"],
            bodyParser: { sizeLimit: "10mb" },
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTREO0FBRTVELGtCQUFlLElBQUEsd0JBQWlCLEVBQUM7SUFDL0IsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQixVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1NBQ2xDO0tBQ0Y7Q0FDRixDQUFDLENBQUEifQ==