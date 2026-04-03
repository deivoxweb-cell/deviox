const testAPI = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Antigravity Dev Test",
        email: "test@example.com",
        subject: "Verification Test",
        message: "This is a backend test to verify if the server is successfully using the new Resend API key.",
        phone: "1234567890",
        company: "Test Co"
      })
    });
    const data = await res.json();
    console.log("Status Code:", res.status);
    console.log("Response Data:", data);
  } catch (err) {
    console.error("Fetch Error:", err);
  }
};
testAPI();
