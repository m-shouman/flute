const MESSAGE_STATUS = {
  NOT_SENT: 0,
  SENT: 1,
  DELIVERED: 2,
  SEEN: 3,
};

export default {
  name: "Conversation",
  data() {
    return {
      messages: [{
          from: false,
          content: "Hi",
          status: MESSAGE_STATUS.SEEN,
        },
        {
          from: true,
          content: "Hi",
          status: MESSAGE_STATUS.SEEN,
        },
        {
          from: false,
          content: "How are you?",
          status: MESSAGE_STATUS.SEEN,
        }, {
          from: true,
          content: "Fine",
          status: MESSAGE_STATUS.SEEN,
        }, {
          from: true,
          content: "u?",
          status: MESSAGE_STATUS.DELIVERED,
        }
      ],
    };
  },
}
