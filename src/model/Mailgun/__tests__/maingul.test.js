const { sendMail } = require("../MailgunService");

describe("Mailgun SendMail Test - Fail because of non registered email.to string", () => {
  test("It should fail since this is not a paid API, and only my personal e-mails are allowed to receive tests.", () => {
    const mailMock = { body: {
        to: ["notallowedemail@example.com", "anothernotallowedemail@example.com"],
        from: "randommain@example.com",
        subject: "Mailgun Test",
        text: "Mailgun Awesome",
        html: "<h1> Imagine a great Title in here :)!</h1>",
        user: {email: "randommain@example.com"}
      }
    };

    return sendMail(mailMock).then((data) => {
      expect(data.error).toBe(true);
    });
  });
});

describe("Mailgun SendMail Test - Succeed because sending for my personal email.", () => {
  test("It should succeed. Sending for my personal email. I can easly forward this e-mail to your own inbox if wanted.", () => {
    const mailMock = { body: {
        to: "danny.oli91@gmail.com",
        subject: "Mailgun Test",
        text: "Mailgun Awesome",
        html: "<h1> Imagine a great Title in here :)!</h1>",
        user: {email: "danny.oli91@gmail.com"}
      }
    };

    return sendMail(mailMock).then((data) => {
      expect(data.error).toBe(false);
    });
  });
});
