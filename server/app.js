const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
// connectin g to db
require("./db/connection");

// calling the user modles

const Users = require("./models/Users");
const Conversation = require("./models/Conversations");
const Messages = require("./models/Messages");

const app = express();

// App use
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.write("Welcome");
  res.end();
});

app.post("/api/register", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(404).send("Plz fill all the required fields");
    } else {
      const isAlreadyExist = await Users.findOne({ email });
      if (isAlreadyExist) {
        res.status(400).send("User already exists");
      } else {
        const newUser = new Users({ fullName, email });
        bcryptjs.hash(password, 10, (err, hashedPassword) => {
          newUser.set("password", hashedPassword);
          newUser.save();
          next();
        });
        return res.status(200).send("User registered succsefully");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).send("Plz fill all the required fields");
    } else {
      const user = await Users.findOne({ email });
      if (!user) {
        res.status(400).send("User or password is incorrect");
      } else {
        const validatUser = await bcryptjs.compare(password, user.password);
        if (!validatUser) {
          res.status(400).send("User or email incoorect");
        } else {
          const payload = {
            userId: user._id,
            email: user.email,
          };
          const JWT_SECRET_KEY =
            process.env.JWT_SECRET_KEY || "THE_KEY_WHICH_CREATED";

          jwt.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: 84600 },
            async (err, token) => {
              await Users.updateOne(
                { _id: user._id },
                {
                  $set: { token },
                }
              );
              user.save();
              next();
            }
          );

          res
            .status(200)
            .json({
              user: { email: user.email, fullName: user.fullName },
              token: user.token,
            });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/conversation", async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    res.status(200).send("Conversation done");
  } catch (error) {
    console.log(error, "Error");
  }
});

app.get("/api/conversation/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const conversations = await Conversation.find({
      members: { $in: [userId] },
    });
    const conversationUserData = Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = await conversation.members.find(
          (member) => member !== userId
        );
        const user = await Users.findById(receiverId);
        return {
          user: { email: user.email, fullName: user.fullName },
          conversationId: conversation._id,
        };
      })
    );
    console.log("conversationUserData =>>", await conversationUserData);

    res.status(200).json(await conversationUserData);
  } catch (error) {
    console.log(error, "Error");
  }
});

app.post("/api/message", async (req, res) => {
  try {
    const { conversationId, senderId, message , receiverId=''} = req.body;
    if( !senderId || !message) return res.status(400).send("Please fill all fields")
    if(!conversationId){
      const newConversation = new Conversation({members: [senderId, receiverId]})
      await newConversation.save();
      const newMessage =  new Messages({conversationId: newConversation._id, senderId, message})
      await newMessage.save()
      return res.status(200).send("Message sent succsefully")
    }
    const newMessage = new Messages({ conversationId, senderId, message });
    await newMessage.save();
    res.status(200).send("Message sent");
  } catch (error) {
    console.log(error, "Error");
  }
});

app.get("/api/message/:conversationId", async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    if(conversationId ==='new')
    return res.status(200).json([])

    const messages = await Messages.find({ conversationId });
    const messageUserData = Promise.all( 
      messages.map(async (message) => {
        const user = await Users.findById(message.senderId);
        return {
          user: { email: user.email, fullName: user.fullName },
          message: message.message,
        };
      })
    );
    res.status(200).json(await messageUserData);
  } catch (error) {
    console.log(error, "Error");
  }
});

app.get('/api/users' ,async(req,res)=>{
  try {
    const users = await Users.find()
    const usersData = Promise.all(users.map(async(user) => {
      return{user: {email: user.email,fullName:user.fullName}, userId:user._id}
    }))

    res.status(200).json(await usersData)
  } catch (error) {
    console.log(error,"Error")
  }


})

app.listen(port, () => {
  console.log("listenin on port" + port);
});
