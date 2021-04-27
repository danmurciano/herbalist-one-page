import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";

export default async (req, res) => {
  const { email } = req.body;

  try {
    `https://gmail.us4.list-manage.com/subscribe/post?u=b699bbf9cc678fb04e8e65e0e&amp;id=${email}`
    
    res.status(201).json();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user. Please try again later");
  }
};
