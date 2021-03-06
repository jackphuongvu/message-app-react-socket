const Message = require('../../models/Messages');
const uuidv4 = require('uuid');

module.exports = {

  save : function (data) {
    return new Promise((resolve, reject) => {
      const message = new Message();

      message.id = uuidv4();
      message.message = data.message;
      mesage.createdAt = Date.now();
      message.userId = data.user_id;
      message.save((err, newMessage) => {
        if (err) {
          // fail
          return res.send({
            success : false,
            message : 'Error: server error'
          });
        }

        // succes
        return res.send({
          success : true,
          message : newMessage
        });
      });
    });
  }

  
}

/*
app.post('api/message/save', (req, res, next) => {

    const data = req.body;
    
    // Steps:
    // 1. Check UserSession
    // 2. Save new message
    const message = new Message();

    message.id = uuidv4();
    message.message = data.message;
    mesage.createdAt = Date.now();
    message.userId = data.user_id;
    message.save((err, newMessage) => {
      if (err) {
        // fail
        return res.send({
          success : false,
          message : 'Error: server error'
        });
      }

      // succes
      return res.send({
        success : true,
        message : newMessage
      });
    });
    


  });

  */