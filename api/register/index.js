module.exports = async function (context, req) {
    const action = context.bindingData.action; // Get the route parameter
    context.log(`HTTP trigger received: ${action}`);
  
    if (action === "register" && req.method === "POST") {
      const { firstName, lastName, phoneNumber, email, userName } = req.body;
  
      if (!firstName || !lastName || !phoneNumber || !email || !userName) {
        context.res = {
          status: 400,
          body: "All fields are required.",
        };
        return;
      }
  
      context.res = {
        status: 201,
        body: `User ${firstName} ${lastName} registered successfully.`,
      };
    } else if (action === "test" && req.method === "GET") {
      context.res = {
        status: 200,
        body: "omg",
      };
    } else if (action === "test2" && req.method === "GET") {
      context.res = {
        status: 200,
        body: "omg2",
      };
    } else {
      context.res = {
        status: 404,
        body: "Route not found.",
      };
    }
    
  };
  