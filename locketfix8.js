// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn!";
var NMS = {
      auto_resume_date: null,
      display_name: "locket",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 399000.0,
          "currency": "VND"
      },
      expires_date: "2030-01-09T10:10:14Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2030-11-25T10:10:15Z",
      purchase_date: "2030-11-25T10:10:14Z",
      store: "app_store",
      store_transaction_id: "852211254886",
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "2030-11-25T10:10:14Z",
      product_identifier: "locket",
      expires_date: "2030-01-09T10:10:14Z"
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = MC) : obj.subscriber.subscriptions["locket"] = MC, obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["locket"] = MC, obj.subscriber.entitlements.pro = locketGold;
$done({
  body: JSON.stringify(obj)
});
